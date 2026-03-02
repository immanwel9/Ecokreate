import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    console.log("=== Email Function Started ===");
    console.log(`Form data: name=${name}, email=${email}`);

    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // SMTP configuration
    const SMTP_HOST = Deno.env.get("SMTP_HOST") || "mail.privateemail.com";
    const SMTP_PORT_STR = Deno.env.get("SMTP_PORT") || "587";
    const SMTP_USER = Deno.env.get("SMTP_USER");
    const SMTP_PASS = Deno.env.get("SMTP_PASS");

    const SMTP_PORT = parseInt(SMTP_PORT_STR);

    console.log(`SMTP Config: host=${SMTP_HOST}, port=${SMTP_PORT}, user=${SMTP_USER}`);

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("SMTP credentials not set");
      throw new Error("SMTP_USER and SMTP_PASS environment variables are required");
    }

    // Connect to SMTP server (port 587 - TLS on submit)
    console.log("Connecting to SMTP server...");
    const conn = await Deno.connect({
      hostname: SMTP_HOST,
      port: SMTP_PORT,
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Helper functions
    const sendCommand = async (cmd: string): Promise<void> => {
      console.log(`→ ${cmd}`);
      await conn.writeAll(encoder.encode(cmd + "\r\n"));
    };

    const readResponse = async (): Promise<string> => {
      const buf = new Uint8Array(1024);
      const n = await conn.read(buf);
      if (n === null) throw new Error("Connection closed");
      const response = decoder.decode(buf.slice(0, n));
      console.log(`← ${response.trim()}`);
      return response;
    };

    // Read greeting
    let response = await readResponse();
    if (!response.includes("220")) {
      throw new Error(`SMTP server error: ${response}`);
    }

    // Send EHLO
    await sendCommand("EHLO mail.ecokreate.com");
    response = await readResponse();

    // STARTTLS
    await sendCommand("STARTTLS");
    response = await readResponse();
    if (!response.includes("220")) {
      throw new Error(`STARTTLS failed: ${response}`);
    }

    // Upgrade connection to TLS
    console.log("Upgrading to TLS...");
    const tlsConn = await Deno.startTls(conn, { hostname: SMTP_HOST });

    // Send EHLO again after TLS
    await sendCommand.call({ writeAll: (data: Uint8Array) => tlsConn.writeAll(data) }, "EHLO mail.ecokreate.com");
    
    // Login
    console.log("Authenticating...");
    await sendCommand("AUTH LOGIN");
    response = await readResponse();

    // Username (base64)
    const usernameB64 = btoa(SMTP_USER);
    await sendCommand(usernameB64);
    response = await readResponse();

    // Password (base64)
    const passwordB64 = btoa(SMTP_PASS);
    await sendCommand(passwordB64);
    response = await readResponse();
    if (!response.includes("235")) {
      throw new Error(`AUTH failed: ${response}`);
    }

    // Send email
    console.log("Sending email...");
    await sendCommand(`MAIL FROM:<${SMTP_USER}>`);
    response = await readResponse();

    await sendCommand(`RCPT TO:<immanwel@ecokreate.com>`);
    response = await readResponse();

    await sendCommand("DATA");
    response = await readResponse();

    // Build email
    const emailContent = `From: ${SMTP_USER}\r\nTo: immanwel@ecokreate.com\r\nReply-To: ${email}\r\nSubject: New Website Contact Form Submission\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\nName: ${name}\r\nEmail: ${email}\r\n\r\nMessage:\r\n${message}`;

    await sendCommand(emailContent);
    await sendCommand(".");
    response = await readResponse();

    // Quit
    await sendCommand("QUIT");

    conn.close();

    console.log("=== Email sent successfully ===");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("=== ERROR ===");
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : String(error);

    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
