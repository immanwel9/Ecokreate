import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";

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

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // SMTP configuration from environment variables
    const SMTP_HOST = Deno.env.get("SMTP_HOST") || "mail.privateemail.com";
    const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "465", 10);
    const SMTP_USER = Deno.env.get("SMTP_USER");
    const SMTP_PASS = Deno.env.get("SMTP_PASS");

    if (!SMTP_USER || !SMTP_PASS) {
      throw new Error("SMTP_USER and SMTP_PASS must be set in environment");
    }

    const client = new SmtpClient();
    await client.connect({
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      username: SMTP_USER,
      password: SMTP_PASS,
      secure: SMTP_PORT === 465,
    });

    await client.send({
      from: SMTP_USER,
      to: "immanwel@ecokreate.com",
      subject: "New Website Contact Form Submission",
      content: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      // reply-to header ensures inbox reply opens visitor address
      headers: {
        "Reply-To": email,
      },
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
