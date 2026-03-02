# Quick Setup Reference

## What's Already Done ✅

- ✅ No Resend or SES code in your website
- ✅ Contact form properly collects: name, email, message
- ✅ Backend function: `send-contact-email` configured for PrivateEmail SMTP
- ✅ Email destination: immanwel@ecokreate.com
- ✅ Reply-To set to visitor's email address
- ✅ Email subject: "New Website Contact Form Submission"

## What You Need To Do

### 1️⃣ Set SMTP Secrets in Supabase (Required for Production)

**Method A: Using Supabase CLI**

```bash
npx supabase@latest secrets set SMTP_HOST=mail.privateemail.com
npx supabase@latest secrets set SMTP_PORT=465
npx supabase@latest secrets set SMTP_USER=immanwel@ecokreate.com
npx supabase@latest secrets set SMTP_PASS=your_privateemail_password
```

**Method B: Using Supabase Dashboard**

1. Go to Project Settings → Edge Functions → Secrets
2. Add these 4 secrets:
   - `SMTP_HOST` = `mail.privateemail.com`
   - `SMTP_PORT` = `465`
   - `SMTP_USER` = `immanwel@ecokreate.com`
   - `SMTP_PASS` = your PrivateEmail password

### 2️⃣ Local Testing (Optional)

1. Copy `.env.local.example` to `.env.local`
2. Replace `your_privateemail_password_here` with actual password
3. Start Supabase: `npx supabase start`

## Email Flow

```
Visitor Form
     ↓
Contact.tsx
     ↓
Supabase Function: send-contact-email
     ↓
PrivateEmail SMTP (mail.privateemail.com:465)
     ↓
immanwel@ecokreate.com ← Message arrives here
```

## Testing

1. Fill out contact form on your website
2. Submit
3. Check immanwel@ecokreate.com inbox
4. Reply to email → goes to visitor automatically (via Reply-To header)

Done! No Resend, no SES, just direct PrivateEmail SMTP delivery.
