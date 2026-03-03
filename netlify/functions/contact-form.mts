import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields (name, email, message) are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the email domain is in the important/whitelisted domains list.
    // Set the IMPORTANT_EMAIL_DOMAINS environment variable in Netlify site settings
    // as a comma-separated list of domains, e.g. "example.com,partner.org"
    const emailDomain = email.split("@")[1]?.toLowerCase();
    const importantDomainsRaw = process.env.IMPORTANT_EMAIL_DOMAINS || "";
    const importantDomains = importantDomainsRaw
      .split(",")
      .map((d: string) => d.trim().toLowerCase())
      .filter(Boolean);

    const isImportant =
      importantDomains.length > 0 && importantDomains.includes(emailDomain);

    // Store in Netlify Blobs — bypasses Netlify Forms spam filtering entirely
    const store = getStore("form-submissions");
    const submissionId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

    await store.setJSON(submissionId, {
      name,
      email,
      message,
      important: isImportant,
      domain: emailDomain,
      submittedAt: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true, id: submissionId }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process submission. Please try again." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};

export const config = {
  path: "/api/contact",
};
