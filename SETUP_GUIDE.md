# Email Configuration Setup Guide

## Overview

Your website contact form uses **PrivateEmail SMTP** to send messages directly to **immanwel@ecokreate.com** without any third-party email sending services (no Resend, no SES).

## How It Works

1. Visitor fills out the contact form with their name, email, and message
2. Form submits to the Supabase Edge Function: `send-contact-email`
3. Function connects to PrivateEmail SMTP server (mail.privateemail.com:465)
4. Email is sent to immanwel@ecokreate.com with:
   - **From:** immanwel@ecokreate.com
   - **Reply-To:** visitor's email (so you can reply directly)
   - **Subject:** New Website Contact Form Submission
   - **Body:** Includes visitor name, email, and message

## Configuration Steps

### Step 1: Get Your PrivateEmail Password

1. Log in to your PrivateEmail account at https://privateemail.com/
2. Go to Account Settings
3. Find your password or set up an app-specific password if needed

### Step 2: Set Supabase Secrets (Production)

Use the Supabase CLI to set the SMTP credentials:

```bash
# Install/update Supabase CLI if needed
npx supabase@latest secrets set

# Then follow the prompts to set these secrets:
# - SMTP_HOST: mail.privateemail.com
# - SMTP_PORT: 465
# - SMTP_USER: immanwel@ecokreate.com
# - SMTP_PASS: [your_privateemail_password]
```

Alternatively, set secrets via Supabase Dashboard:
1. Go to Project Settings → Edge Functions → Secrets
2. Click "Add Secret" and add each variable:
   - SMTP_HOST = mail.privateemail.com
   - SMTP_PORT = 465
   - SMTP_USER = immanwel@ecokreate.com
   - SMTP_PASS = [your actual password]

### Step 3: Local Testing (Optional)

For local development with Supabase functions:

1. Copy `.env.local.example` to `.env.local`
2. Update `SMTP_PASS` with your actual PrivateEmail password
3. Start local Supabase: `npx supabase start`
4. The function will use these environment variables

## Security Notes

- **Never commit** `.env.local` to git (it's already in .gitignore)
- **Never commit** actual passwords to version control
- Supabase secrets are encrypted and never exposed to the frontend
- The SMTP password is only used server-side in the Edge Function

## Testing the Email

1. Visit your website's contact form
2. Fill in:
   - Name: Your name
   - Email: Your email address
   - Message: A test message
3. Click "Send message"
4. Check immanwel@ecokreate.com inbox
5. When you reply to the email, it should go to the visitor's email address

## Troubleshooting

### Email not sending?
- Verify SMTP credentials are correct in Supabase secrets
- Check Supabase Edge Function logs for errors
- Ensure SMTP_PORT matches your PrivateEmail setup (465 for SSL)

### Replies going to wrong address?
- The "Reply-To" header is set to the visitor's email address
- This ensures inbox reply opens the visitor's email

### Still need Resend/SES removed?
- Confirmed: **No Resend or SES code exists** in your website
- All email functionality uses PrivateEmail SMTP only

## Documentation

Supabase Secrets: https://supabase.com/docs/guides/functions/secrets
PrivateEmail SMTP: https://privateemail.com/
