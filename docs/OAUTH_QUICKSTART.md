# Quick Start - OAuth Configuration

This is a quick reference guide. For detailed instructions, see [OAUTH_SETUP.md](OAUTH_SETUP.md).

## 🔵 Google OAuth (5 minutes)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Configure OAuth consent screen
5. Create OAuth credentials (Web application)
6. Add redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google`
7. Copy Client ID and Client Secret

**Environment Variables:**
```bash
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

## 🍎 Apple Sign In (15 minutes)

**Prerequisites:** Apple Developer Account ($99/year)

1. Create App ID with "Sign in with Apple" capability
2. Create Services ID (this is your Client ID)
3. Configure domains and return URLs
4. Create a Private Key (.p8 file)
5. Generate Client Secret using our script:
   ```bash
   node scripts/generate-apple-secret.js
   ```

**Environment Variables:**
```bash
APPLE_CLIENT_ID="com.vitriol.web"
APPLE_CLIENT_SECRET="eyJhbGciOiJFUzI1NiIsImtpZCI6..." # From script
```

## 🔐 NextAuth Setup

**Environment Variables:**
```bash
NEXTAUTH_URL="http://localhost:3000"  # Or your production domain
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
```

Generate the secret:
```bash
openssl rand -base64 32
```

## ✅ Testing

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/auth/login`

3. Click "Continue with Google" or "Continue with Apple"

4. Complete the OAuth flow

## 📱 Production (Vercel)

1. Add all environment variables in Vercel dashboard
2. Update redirect URIs to use your production domain
3. Redeploy

## 🐛 Common Issues

**Google: "redirect_uri_mismatch"**
- Check redirect URI matches exactly (no trailing slash)

**Apple: "invalid_client"**
- Client Secret may be expired (regenerate it)

**General: OAuth not working**
- Check environment variables are set
- Verify database connection
- Check Prisma schema includes Account table

## 📚 Full Documentation

For complete setup instructions, troubleshooting, and advanced configuration:
- [Complete OAuth Setup Guide](OAUTH_SETUP.md)
- [NextAuth Documentation](https://next-auth.js.org/)

---

**Need the .p8 file again?** You can only download it once from Apple Developer.
**Secret expired?** Run the script again to generate a new one.
