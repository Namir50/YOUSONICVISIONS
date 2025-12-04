# Email Setup Guide

## Gmail SMTP Configuration

To enable email functionality for the contact form, you need to configure Gmail SMTP settings.

### Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Scroll down to **App passwords**: https://myaccount.google.com/apppasswords
4. Select app: **Mail**
5. Select device: **Other (Custom name)** → Enter "VISIONSONICAI"
6. Click **Generate**
7. Copy the 16-character password (no spaces)

### Step 2: Configure Backend Environment

Open `backend/.env` and update:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_actual_email@gmail.com
SMTP_PASSWORD=your_16_char_app_password
COMPANY_EMAIL=hello@visionsonicai.com
```

**Important:**
- Use the **App Password**, NOT your regular Gmail password
- Replace `your_actual_email@gmail.com` with your Gmail address
- Replace `your_16_char_app_password` with the generated app password
- Update `COMPANY_EMAIL` to your desired company email

### Step 3: Restart Backend

```bash
cd backend
uvicorn main:app --reload
```

## How It Works

When a user submits the contact form:

1. **Company Email** receives:
   - User's name, email, phone
   - Label name (if provided)
   - Song duration
   - Video idea/visual data
   - AI-generated treatment (if generated)

2. **User Email** receives:
   - Confirmation with all submitted details
   - Message: "We will connect with you shortly"

## Testing

1. Fill out the contact form on the website
2. Click "Transmit Data"
3. Check both emails (company and user)

## Troubleshooting

- **"Email configuration not set"**: Check `.env` file has all SMTP variables
- **"Failed to send email"**: Verify App Password is correct
- **"Authentication failed"**: Enable 2-Step Verification and regenerate App Password
