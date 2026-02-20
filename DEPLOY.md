# 🚀 Deploy Vitriol no Vercel

## Pré-requisitos

1. Conta no Vercel (vercel.com)
2. Vercel CLI instalado (opcional)
3. Repositório GitHub conectado

## 📋 Passo a Passo

### 1. Conectar Repositório

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Conecte sua conta do GitHub
4. Selecione o repositório: `daltromaranhao/vitriol`
5. Clique em "Import"

### 2. Configurar Projeto

**Framework Preset:** Next.js  
**Root Directory:** `./` (padrão)  
**Build Command:** `npm run build` (padrão)  
**Output Directory:** `.next` (padrão)

### 3. Variáveis de Ambiente

Adicione as seguintes variáveis em "Environment Variables":

```bash
# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://neondb_owner:npg_HivEjTc6ne0V@ep-flat-grass-aimzibdi-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# NextAuth
NEXTAUTH_URL=https://seu-dominio.vercel.app
NEXTAUTH_SECRET=seu-secret-aqui-gerar-com-openssl-rand-base64-32

# OAuth Providers (Opcional - adicionar depois)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
APPLE_CLIENT_ID=
APPLE_CLIENT_SECRET=
```

### 4. Deploy

1. Clique em "Deploy"
2. Aguarde o build (2-3 minutos)
3. ✅ Deploy completo!

## 🔧 Após Deploy

### Configurar OAuth (Opcional)

#### Google OAuth:
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um projeto
3. Ative Google+ API
4. Crie credenciais OAuth 2.0
5. Adicione redirect URI: `https://seu-dominio.vercel.app/api/auth/callback/google`
6. Copie Client ID e Secret para Vercel

#### Apple Sign In:
1. Acesse [Apple Developer](https://developer.apple.com/)
2. Crie um Service ID
3. Configure Sign In with Apple
4. Adicione redirect URI: `https://seu-dominio.vercel.app/api/auth/callback/apple`
5. Gere Client Secret (válido por 6 meses)
6. Copie para Vercel

### Verificar Database

1. O build automático executa: `prisma generate && next build`
2. Migrations precisam ser aplicadas manualmente:

```bash
# Via Vercel CLI
vercel env pull .env.local
npx prisma migrate deploy

# Ou via Neon Dashboard
```

### Seed Database (Opcional)

```bash
npm run db:seed
```

## 🌍 URLs do Site

**Páginas Principais:**
- `/` → Redireciona para `/pt-BR`
- `/pt-BR` → Landing em Português 🇧🇷
- `/en-US` → Landing em Inglês 🇺🇸
- `/es-ES` → Landing em Espanhol 🇪🇸
- `/fr-FR` → Landing em Francês 🇫🇷

**Autenticação:**
- `/pt-BR/auth/login` → Login
- `/pt-BR/auth/register` → Cadastro

**Dashboard (Protegido):**
- `/pt-BR/dashboard` → Dashboard principal
- `/pt-BR/members` → Diretório de membros
- `/pt-BR/messages` → Mensagens
- `/pt-BR/connections` → Conexões
- `/pt-BR/profile` → Perfil
- `/pt-BR/settings` → Configurações

## 🐛 Troubleshooting

### Build Error: Prisma

Se der erro de Prisma:
```bash
# Adicione em package.json (já está configurado)
"postinstall": "prisma generate"
```

### 404 nas Rotas

Verifique se todas as variáveis de ambiente estão configuradas corretamente.

### Database Connection Error

Verifique o `DATABASE_URL` e se o Neon está acessível.

## 📊 Monitoramento

- Logs: Vercel Dashboard → Deployment → Runtime Logs
- Analytics: Vercel Dashboard → Analytics
- Performance: Vercel Speed Insights

## 🎉 Pronto!

Seu site estará acessível em: `https://vitriol.vercel.app`

Customize o domínio em: Vercel Dashboard → Settings → Domains
