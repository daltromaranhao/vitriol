Vitriol - Global Brotherhood Platform

A comprehensive Next.js SaaS platform connecting brothers worldwide.

## Features

- 🔐 **Authentication**: Email/Password, Google, Apple sign-in
- 👥 **Profiles**: User profiles with verification system
- 🤝 **Connections**: Connect with members worldwide
- 💬 **Messaging**: Real-time messaging system
- 📍 **Global Map**: See members around the world
- 📱 **Feed**: Share posts and engage with community
- 🔔 **Notifications**: Stay updated with community activity
- 🌍 **i18n**: Multi-language support (EN, PT, ES, FR)
- 🌓 **Themes**: Dark and light mode support

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Authentication**: Auth.js (NextAuth)
- **UI Components**: Shadcn/UI (planned)
- **Internationalization**: next-intl (planned)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (Neon recommended)

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/daltromaranhao/vitriol.git
cd vitriol
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`

Edit `.env` and add your configuration:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_SECRET`: Generate with \`openssl rand -base64 32\`
- OAuth credentials (optional): Google, Apple

4. Set up the database:
\`\`\`bash
npx prisma generate
npx prisma db push
npm run db:seed
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript compiler check
- `npm run db:push` - Push Prisma schema to database
- `npm run db:seed` - Seed database with demo data
- `npm run db:studio` - Open Prisma Studio

## Project Structure

\`\`\`
vitriol/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard page
│   └── ...
├── components/            # React components
├── lib/                   # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── utils.ts          # Helper functions
│   └── prisma.ts         # Prisma client
├── prisma/               # Database schema and migrations
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed script
├── providers/            # React context providers
├── services/             # Business logic services
├── types/                # TypeScript type definitions
├── messages/             # i18n translation files
└── public/               # Static assets
\`\`\`

## Database Schema

The application includes models for:
- Users & Profiles
- Connections & Connection Requests
- Messages & Conversations
- Posts, Comments & Likes
- Notifications
- Verification System

See `prisma/schema.prisma` for complete schema.

## Environment Variables

See `.env.example` for all required environment variables.

## Deployment

This application can be deployed to:
- Vercel (recommended)
- Railway
- Render
- Any Node.js hosting platform

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/daltromaranhao/vitriol)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.
\`\`\`

---

Built with ❤️ for the Global Brotherhood
