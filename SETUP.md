# Database Setup Instructions

The database connection is configured, but migration needs to be run from an environment with network access to Neon.

## To Complete Database Setup:

### Option 1: Local Development (Recommended)

1. Clone the repository on your local machine:
   \`\`\`bash
   git clone https://github.com/daltromaranhao/vitriol.git
   cd vitriol
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. The `.env` file is already configured with your Neon database. Run migrations:
   \`\`\`bash
   npx prisma db push
   \`\`\`

4. Seed the database with demo data:
   \`\`\`bash
   npm run db:seed
   \`\`\`

5. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

6. Visit http://localhost:3000

### Option 2: Deploy to Vercel

1. Push the code to GitHub (already done)
2. Go to https://vercel.com
3. Import the repository
4. Vercel will auto-detect Next.js
5. Add environment variables from `.env` (or keep them as they are committed)
6. Deploy

Vercel will have network access to run the database migrations automatically.

### Option 3: Use Neon Console

1. Go to your Neon dashboard
2. Open the SQL Editor
3. Run the schema from `prisma/schema.prisma` manually (Neon can generate SQL from Prisma)

## Test the Application

Once the database is set up:

1. **Register a new account**: Visit `/auth/register`
2. **Login**: Visit `/auth/login`
3. **View Dashboard**: After login, you'll be redirected to `/dashboard`

## Demo Credentials (After seeding)

- Email: john@example.com
- Password: (You'll need to set this if seeding, or just register a new account)

## Current Status

✅ Next.js application configured and building successfully
✅ Prisma schema designed with all models
✅ Authentication system implemented
✅ Database connection configured
⏳ Database migration pending (requires network access to Neon)
⏳ Seeding pending (run after migration)

## Next Development Steps

After database is set up, continue with:
1. Theme system implementation (dark/light mode)
2. Internationalization (next-intl)
3. UI component library (Shadcn/UI)
4. Core pages (profile, members, connections, messages)
5. Feed/posts system
6. Map integration
