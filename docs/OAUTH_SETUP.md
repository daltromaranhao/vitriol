# OAuth Setup Guide - Google & Apple

This guide will help you configure Google and Apple OAuth authentication for Vitriol.

## Overview

The application is already configured to support:
- ✅ Google OAuth
- ✅ Apple Sign In
- ✅ Email/Password authentication

You just need to obtain the OAuth credentials and add them to your environment variables.

---

## 🔵 Google OAuth Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Select a project"** → **"New Project"**
3. Name it **"Vitriol"** and click **"Create"**

### Step 2: Enable Google+ API

1. In the left sidebar, go to **"APIs & Services"** → **"Library"**
2. Search for **"Google+ API"**
3. Click on it and press **"Enable"**

### Step 3: Configure OAuth Consent Screen

1. Go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** (unless you have a Google Workspace)
3. Fill in the required fields:
   - **App name**: `Vitriol`
   - **User support email**: Your email
   - **Developer contact**: Your email
4. Click **"Save and Continue"**
5. On **Scopes** page, click **"Add or Remove Scopes"**
   - Add: `userinfo.email`
   - Add: `userinfo.profile`
6. Click **"Save and Continue"**
7. Add test users if in testing mode (your email)
8. Click **"Save and Continue"**

### Step 4: Create OAuth Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Select **"Web application"**
4. Configure:
   - **Name**: `Vitriol Web Client`
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (for local development)
     - `https://yourdomain.com` (your production domain)
   - **Authorized redirect URIs**:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://yourdomain.com/api/auth/callback/google`
5. Click **"Create"**
6. **Copy the Client ID and Client Secret** - you'll need these!

### Step 5: Add to Environment Variables

Add to your `.env` or `.env.local`:

```bash
GOOGLE_CLIENT_ID="your-google-client-id-here.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret-here"
```

---

## 🍎 Apple Sign In Setup

### Step 1: Apple Developer Account

1. You need an [Apple Developer Account](https://developer.apple.com/) ($99/year)
2. Ensure you have access to **Certificates, Identifiers & Profiles**

### Step 2: Create an App ID

1. Go to [Apple Developer](https://developer.apple.com/account)
2. Navigate to **"Certificates, Identifiers & Profiles"**
3. Click **"Identifiers"** → **"+"** button
4. Select **"App IDs"** → Continue
5. Select **"App"** → Continue
6. Configure:
   - **Description**: `Vitriol`
   - **Bundle ID**: `com.vitriol.app` (or your domain in reverse)
   - **Capabilities**: Check **"Sign in with Apple"**
7. Click **"Continue"** → **"Register"**

### Step 3: Create a Services ID

1. Go back to **"Identifiers"** → **"+"** button
2. Select **"Services IDs"** → Continue
3. Configure:
   - **Description**: `Vitriol Web`
   - **Identifier**: `com.vitriol.web` (this will be your Client ID)
4. Check **"Sign in with Apple"**
5. Click **"Configure"** next to "Sign in with Apple"
6. Configure domains:
   - **Primary App ID**: Select the App ID you created above
   - **Domains and Subdomains**:
     - `localhost` (for development)
     - `yourdomain.com` (your production domain)
   - **Return URLs**:
     - `http://localhost:3000/api/auth/callback/apple`
     - `https://yourdomain.com/api/auth/callback/apple`
7. Click **"Save"** → **"Continue"** → **"Register"**

### Step 4: Create a Private Key

1. Go to **"Keys"** → **"+"** button
2. Configure:
   - **Key Name**: `Vitriol Sign In Key`
   - Check **"Sign in with Apple"**
   - Click **"Configure"** and select your Primary App ID
3. Click **"Continue"** → **"Register"**
4. **Download the .p8 key file** (you can only download it once!)
5. Note the **Key ID** shown on the screen

### Step 5: Generate the Client Secret

Apple requires you to generate a JWT as the client secret. Here's a Node.js script:

Create a file `generate-apple-secret.js`:

```javascript
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Configuration
const TEAM_ID = 'YOUR_TEAM_ID'; // Found in Apple Developer Account
const CLIENT_ID = 'com.vitriol.web'; // Your Services ID
const KEY_ID = 'YOUR_KEY_ID'; // From the key you created
const KEY_FILE = './AuthKey_XXXXXXXXXX.p8'; // Your downloaded .p8 file

const privateKey = fs.readFileSync(KEY_FILE);

const token = jwt.sign(
  {
    iss: TEAM_ID,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 86400 * 180, // 6 months
    aud: 'https://appleid.apple.com',
    sub: CLIENT_ID,
  },
  privateKey,
  {
    algorithm: 'ES256',
    header: {
      alg: 'ES256',
      kid: KEY_ID,
    },
  }
);

console.log('Apple Client Secret (valid for 6 months):');
console.log(token);
```

Run it:
```bash
npm install jsonwebtoken
node generate-apple-secret.js
```

**Note**: The client secret expires after 6 months. You'll need to regenerate it periodically.

### Step 6: Add to Environment Variables

Add to your `.env` or `.env.local`:

```bash
APPLE_CLIENT_ID="com.vitriol.web"
APPLE_CLIENT_SECRET="eyJhbGciOiJFUzI1NiIsImtpZCI6IlhYWFhYWFhYWFgifQ..." # JWT from script
```

---

## 🔐 NextAuth Configuration

The app is already configured! Just verify these settings in `auth.ts`:

```typescript
GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
}),
AppleProvider({
  clientId: process.env.APPLE_CLIENT_ID || "",
  clientSecret: process.env.APPLE_CLIENT_SECRET || "",
}),
```

---

## 🧪 Testing

### Local Development

1. Create a `.env.local` file (don't commit this!):
```bash
# Database
DATABASE_URL="your-database-url"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-generate-with-openssl-rand-base64-32"

# Google OAuth
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Apple OAuth
APPLE_CLIENT_ID="..."
APPLE_CLIENT_SECRET="..."
```

2. Start the dev server:
```bash
npm run dev
```

3. Visit `http://localhost:3000/auth/login`
4. Click **"Continue with Google"** or **"Continue with Apple"**
5. Complete the OAuth flow

### Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to **"Environment Variables"**
3. Add all the OAuth variables:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `APPLE_CLIENT_ID`
   - `APPLE_CLIENT_SECRET`
   - `NEXTAUTH_URL` (your production URL)
   - `NEXTAUTH_SECRET` (generate with `openssl rand -base64 32`)
4. Redeploy the application

---

## 🔄 OAuth Flow

### How it works:

1. User clicks "Continue with Google/Apple" on login/register page
2. User is redirected to Google/Apple's OAuth consent screen
3. User authorizes the application
4. Google/Apple redirects back to `/api/auth/callback/google` or `/api/auth/callback/apple`
5. NextAuth creates or updates the user in the database
6. User is redirected to dashboard (login) or onboarding (register)

### Database Integration:

The app uses Prisma with the NextAuth adapter. When a user signs in with OAuth:

1. If user doesn't exist → Create new user with OAuth account
2. If user exists → Link OAuth account to existing user
3. User data is stored in:
   - `User` table (id, email, name, etc.)
   - `Account` table (provider, providerAccountId, tokens)
   - `Profile` table (extended user info)

---

## 📱 Testing Apple Sign In

**Important Notes:**
- Apple Sign In **does not work on localhost with iOS/Safari** - only in production or with tunneling (ngrok)
- For local testing, use the web version or an Android device
- Email may be hidden by Apple's privacy relay (user can choose)

---

## 🐛 Troubleshooting

### Google OAuth Issues

**Error: "redirect_uri_mismatch"**
- Check that redirect URI in Google Console matches exactly: `http://localhost:3000/api/auth/callback/google`
- Make sure there are no trailing slashes

**Error: "Access blocked: This app's request is invalid"**
- OAuth consent screen not configured
- App not verified (add yourself as test user)

### Apple OAuth Issues

**Error: "invalid_client"**
- Client Secret (JWT) may be expired (regenerate it)
- Client ID doesn't match Services ID

**Error: "invalid_request"**
- Return URL not added to Services ID configuration
- Domain not verified

### General Issues

**Users can't sign in after OAuth**
- Check database connection
- Verify Prisma schema includes `Account` and `Session` tables
- Check NextAuth adapter configuration

**Email already exists error**
- User registered with email/password first
- NextAuth should automatically link accounts - check adapter configuration

---

## 🔒 Security Best Practices

1. **Never commit credentials** - use `.env.local` for local dev
2. **Use environment variables** - in Vercel for production
3. **Rotate secrets regularly** - especially Apple Client Secret
4. **Use HTTPS in production** - OAuth requires it
5. **Implement rate limiting** - prevent brute force attacks
6. **Monitor OAuth usage** - check Google/Apple dashboards

---

## 📚 Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth Guide](https://developers.google.com/identity/protocols/oauth2)
- [Apple Sign In Guide](https://developer.apple.com/sign-in-with-apple/)
- [NextAuth Google Provider](https://next-auth.js.org/providers/google)
- [NextAuth Apple Provider](https://next-auth.js.org/providers/apple)

---

## ✅ Checklist

### Google OAuth
- [ ] Google Cloud Project created
- [ ] OAuth consent screen configured
- [ ] OAuth credentials created
- [ ] Redirect URIs added
- [ ] Client ID and Secret added to environment
- [ ] Tested login flow

### Apple Sign In
- [ ] Apple Developer account active
- [ ] App ID created with Sign in with Apple
- [ ] Services ID created
- [ ] Private key created and downloaded
- [ ] Client Secret generated
- [ ] Return URLs configured
- [ ] Client ID and Secret added to environment
- [ ] Tested login flow (production domain)

### Environment Variables
- [ ] `.env.local` created for local development
- [ ] Vercel environment variables configured
- [ ] `NEXTAUTH_SECRET` generated
- [ ] `NEXTAUTH_URL` set correctly

---

**Need Help?** Check the NextAuth documentation or create an issue in the repository.
