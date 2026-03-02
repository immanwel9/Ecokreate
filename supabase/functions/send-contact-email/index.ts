import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Simple SMTP client implementation
async function sendEmailViaSMTP(
  from: string,
  to: string,
  replyTo: string,
  subject: string,
  body: string,
  smtpHost: string,
  smtpPort: number,
  username: string,
  password: string
): Promise<void> {
  console.log(`Connecting to ${smtpHost}:${smtpPort}`);

  // Create TLS connection
  const conn = await Deno.connect({
    hostname: smtpHost,
    port: smtpPort,
  });

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  // Read server greeting
  let response = await readResponse(conn, decoder);
  console.log("Server greeting:", response);

  if (!response.includes("220")) {
    throw new Error(`Unexpected server response: ${response}`);
  }

  // Send EHLO
  await sendCommand(conn, encoder, "EHLO mail.ecokreate.com");
  response = await readResponse(conn, decoder);
  console.log("EHLO response:", response);

  // AUTH LOGIN
  await sendCommand(conn, encoder, "AUTH LOGIN");
  response = await readResponse(conn, decoder);
  console.log("AUTH LOGIN response:", response);

  // Send username (base64)
  const usernameB64 = btoa(username);
  await sendCommand(conn, encoder, usernameB64);
  response = await readResponse(conn, decoder);
  console.log("Username response:", response);

  // Send password (base64)
  const passwordB64 = btoa(password);
  await sendCommand(conn, encoder, passwordB64);
  response = await readResponse(conn, decoder);
  console.log("Password response:", response);

  // MAIL FROM
  await sendCommand(conn, encoder, `MAIL FROM:<${from}>`);
  response = await readResponse(conn, decoder);
  console.log("MAIL FROM response:", response);

  // RCPT TO
  await sendCommand(conn, encoder, `RCPT TO:<${to}>`);
  response = await readResponse(conn, decoder);
  console.log("RCPT TO response:", response);

  // DATA
  await sendCommand(conn, encoder, "DATA");
  response = await readResponse(conn, decoder);
  console.log("DATA response:", response);

  // Build email
  const emailContent = `From: ${from}\r\nTo: ${to}\r\nReply-To: ${replyTo}\r\nSubject: ${subject}\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n${body}\r\n.`;

  await sendCommand(conn, encoder, emailContent);
  response = await readResponse(conn, decoder);
  console.log("Email sent response:", response);

  // QUIT
  await sendCommand(conn, encoder, "QUIT");
  response = await readResponse(conn, decoder);
  console.log("QUIT response:", response);

  conn.close();
}

async function sendCommand(conn: Deno.Conn, encoder: TextEncoder, cmd: string): Promise<void> {
  await conn.writeAll(encoder.encode(cmd + "\r\n"));
}

async function readResponse(conn: Deno.Conn, decoder: TextDecoder): Promise<string> {
  const buf = new Uint8Array(1024);
  const bytesRead = await conn.read(buf);
  if (bytesRead === null) {
    throw new Error("Connection closed");
  }
  return decoder.decode(buf.slice(0, bytesRead));
}

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
    const SMTP_PORT_STR = Deno.env.get("SMTP_PORT") || "465";
    const SMTP_USER = Deno.env.get("SMTP_USER");
    const SMTP_PASS = Deno.env.get("SMTP_PASS");

    const SMTP_PORT = parseInt(SMTP_PORT_STR);

    console.log(`SMTP Config: host=${SMTP_HOST}, port=${SMTP_PORT}, user=${SMTP_USER}`);

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("SMTP credentials not set");
      throw new Error("SMTP_USER and SMTP_PASS environment variables are required");
    }

    // Send email
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    await sendEmailViaSMTP(
      SMTP_USER,
      "immanwel@ecokreate.com",
      email,
      "New Website Contact Form Submission",
      emailBody,
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS
    );

    console.log("=== Email sent successfully ===");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("=== ERROR ===");
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${errorMessage}`);

    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
