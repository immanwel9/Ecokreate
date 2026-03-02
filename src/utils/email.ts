import nodemailer from "nodemailer";

// Escape HTML special characters
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
) {
  const port = parseInt(process.env.SMTP_PORT || "587");
  const host = process.env.SMTP_HOST || "mail.privateemail.com";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  console.log(`SMTP Config: host=${host}, port=${port}, user=${user}`);

  if (!user || !pass) {
    throw new Error(`SMTP credentials missing: user=${user}, pass=${pass ? "***" : "missing"}`);
  }

  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: port === 465,
    auth: {
      user: user,
      pass: pass,
    },
  });

  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedMessage = escapeHtml(message);

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "immanwel@ecokreate.com",
    replyTo: email,
    subject: "New Website Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${escapedName}</p><p><strong>Email:</strong> ${escapedEmail}</p><p><strong>Message:</strong></p><p>${escapedMessage.replace(
      /\n/g,
      "<br>"
    )}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
}
