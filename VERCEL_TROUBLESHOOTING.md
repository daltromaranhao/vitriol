# 🔧 Troubleshooting Vercel 404 Errors

## ✅ Latest Fix Applied (2025)

**Simplified middleware to resolve Edge runtime issues**

### What Was Fixed:
- Removed async `auth()` call from middleware
- Auth.js middleware wasn't compatible with Vercel Edge runtime
- Now using pure next-intl middleware only

---

## 🚀 Deploy Steps:

### 1. Ensure Environment Variables Are Set

In Vercel Dashboard → Settings → Environment Variables:

```bash
DATABASE_URL=postgresql://...  # ✅ Already configured
NEXTAUTH_URL=https://vitriol.global
NEXTAUTH_SECRET=gH8kL2mN9pQ4rS7tU1vW3xY6zA8bC0dE5fG7hI9jK2lM4nO6pR8sT0uV2wX4yZ6A
```

**⚠️ Important:** Select all three environments (Production, Preview, Development)

### 2. Trigger New Deploy

Option A - Automatic:
- Push to GitHub will auto-deploy

Option B - Manual:
1. Go to Deployments
2. Click latest deployment
3. Click "..." → Redeploy
4. ✅ Check "Use existing Build Cache" OFF

### 3. Wait for Build (~2 min)

Watch for:
- ✅ "Build Completed" message
- ✅ "60 routes" in build output
- ✅ No middleware errors

### 4. Test URLs

After deployment completes, test:

```bash
# Should redirect to /pt-BR
https://vitriol.global/

# Direct locale access
https://vitriol.global/pt-BR
https://vitriol.global/en-US
https://vitriol.global/es-ES
https://vitriol.global/fr-FR

# Auth pages
https://vitriol.global/pt-BR/auth/login
https://vitriol.global/pt-BR/auth/register

# Other pages
https://vitriol.global/pt-BR/dashboard
https://vitriol.global/pt-BR/members
```

---

## 🐛 If Still Getting 404:

### Check #1: Deployment Logs
1. Vercel Dashboard → Deployments
2. Click your deployment
3. Click "Building" or "Function Logs"
4. Look for errors mentioning:
   - `middleware`
   - `next-intl`
   - `auth`

### Check #2: Build Output
Should see:
```
Route (app)
┌ ○ /
├ ● /[locale]
│ ├ /en-US
│ ├ /pt-BR
...
ƒ Proxy (Middleware)
```

### Check #3: Vercel Configuration
Check `vercel.json`:
```json
{
  "buildCommand": "prisma generate && next build",
  "framework": "nextjs",
  "rewrites": [
    { "source": "/", "destination": "/pt-BR" }
  ]
}
```

### Check #4: Next.js Config
Check `next.config.ts` has:
```typescript
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n.ts');
```

---

## �� Expected Behavior:

### ✅ Working:
- `/` → Redirects to `/pt-BR` (Portuguese)
- `/pt-BR` → Landing page in Portuguese
- `/en-US` → Landing page in English
- All 60 routes accessible
- Theme toggle works
- Language switcher works

### ❌ Not Working Yet (No Auth):
- Protected routes redirect to login
- Login doesn't authenticate (OAuth not configured)
- Protected pages show "Sign in required" message

---

## 🔐 Auth Configuration (Optional):

After site is working, add OAuth:

### Google OAuth:
1. Go to Google Cloud Console
2. Create OAuth Client ID
3. Add to Vercel env vars:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`

### Apple OAuth:
1. Go to Apple Developer Portal
2. Create Service ID
3. Add to Vercel env vars:
   - `APPLE_CLIENT_ID`
   - `APPLE_CLIENT_SECRET`

---

## 💡 Quick Fixes:

### Clear Vercel Cache:
```bash
# In deployment settings
Redeploy → Uncheck "Use existing Build Cache"
```

### Force Fresh Build:
```bash
# Push empty commit
git commit --allow-empty -m "trigger rebuild"
git push
```

### Check Function Logs:
```bash
# Vercel CLI
vercel logs --follow
```

---

## 📞 Need Help?

1. Check build logs for specific errors
2. Verify all env vars are set
3. Test with `npm run build` locally first
4. Check Next.js 16 + next-intl compatibility

---

Last Updated: 2025-01-XX
Commit: 153e116
