# OAuth Redirect URIs - Vitriol

Configure estas URLs exatas nos consoles do Google e Apple.

## 🔵 Google OAuth - Authorized Redirect URIs

### Google Cloud Console
**Local:** APIs & Services → Credentials → Your OAuth Client → Authorized redirect URIs

### URLs a adicionar:

```
http://localhost:3000/api/auth/callback/google
https://vitriol.io/api/auth/callback/google
https://www.vitriol.io/api/auth/callback/google
https://vitriol.global/api/auth/callback/google
https://www.vitriol.global/api/auth/callback/google
```

### Authorized JavaScript Origins (também necessário):

```
http://localhost:3000
https://vitriol.io
https://www.vitriol.io
https://vitriol.global
https://www.vitriol.global
```

---

## 🍎 Apple Sign In - Return URLs

### Apple Developer Console
**Local:** Certificates, Identifiers & Profiles → Identifiers → Your Services ID → Configure Sign in with Apple

### Return URLs a adicionar:

```
http://localhost:3000/api/auth/callback/apple
https://vitriol.io/api/auth/callback/apple
https://www.vitriol.io/api/auth/callback/apple
https://vitriol.global/api/auth/callback/apple
https://www.vitriol.global/api/auth/callback/apple
```

### Domains and Subdomains (também necessário):

```
localhost
vitriol.io
www.vitriol.io
vitriol.global
www.vitriol.global
```

---

## 📋 Checklist de Configuração

### Google OAuth
- [ ] Adicionar todas as 5 redirect URIs
- [ ] Adicionar todas as 5 JavaScript origins
- [ ] Testar em localhost
- [ ] Testar em vitriol.io
- [ ] Testar em vitriol.global

### Apple Sign In
- [ ] Adicionar todos os 5 domínios
- [ ] Adicionar todas as 5 return URLs
- [ ] Verificar Primary App ID está selecionado
- [ ] Testar em produção (Apple não funciona bem em localhost)

---

## ⚙️ Environment Variables por Domínio

### Development (localhost)
```bash
NEXTAUTH_URL="http://localhost:3000"
```

### Production - vitriol.io
```bash
NEXTAUTH_URL="https://vitriol.io"
```

### Production - vitriol.global
```bash
NEXTAUTH_URL="https://vitriol.global"
```

---

## 🔄 Vercel Deployment URLs

Se estiver usando Vercel, você também pode precisar adicionar as URLs de preview:

### Vercel Preview URLs (opcional)
```
https://vitriol-git-main-[seu-username].vercel.app/api/auth/callback/google
https://vitriol-git-main-[seu-username].vercel.app/api/auth/callback/apple
```

---

## 🚨 Importante

### Para Google:
- ✅ As URLs devem ser **exatamente** iguais (sem trailing slash)
- ✅ HTTP só funciona para localhost
- ✅ HTTPS obrigatório para produção
- ⚠️ Mudanças podem levar alguns minutos para propagar

### Para Apple:
- ✅ Domínios devem ser verificados
- ✅ Não funciona bem em localhost (use produção para testar)
- ✅ Pode usar email relay (email oculto)
- ⚠️ Mudanças podem levar até 24h para propagar

---

## 🧪 Como Testar

### 1. Localhost (Development)
```bash
npm run dev
```
Visitar: http://localhost:3000/auth/login

### 2. vitriol.io
Visitar: https://vitriol.io/auth/login

### 3. vitriol.global
Visitar: https://vitriol.global/auth/login

### Fluxo de Teste:
1. Clicar em "Continue with Google" ou "Continue with Apple"
2. Autorizar o aplicativo
3. Deve redirecionar para `/dashboard` ou `/onboarding`
4. Verificar se o usuário foi criado no banco de dados

---

## 📱 Redirecionamentos Customizados

Se precisar customizar os redirecionamentos, você pode alterar em:

**Para Login:**
`app/[locale]/auth/login/page.tsx`
```typescript
onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
```

**Para Registro:**
`app/[locale]/auth/register/page.tsx`
```typescript
onClick={() => signIn("google", { callbackUrl: "/onboarding" })}
```

---

## 🔒 Segurança

- ✅ Sempre use HTTPS em produção
- ✅ Nunca exponha Client Secrets no código frontend
- ✅ Valide redirect URIs no backend
- ✅ Use NEXTAUTH_SECRET forte (32+ caracteres)
- ✅ Monitore logs de autenticação

---

## 📞 Suporte

**Erro de redirect_uri_mismatch?**
1. Verifique se a URL está exatamente igual no console
2. Certifique-se que NEXTAUTH_URL está correto
3. Espere alguns minutos após alterar configurações
4. Limpe cache do navegador

**OAuth não funciona?**
1. Verifique environment variables no Vercel
2. Confirme que o domínio está acessível via HTTPS
3. Verifique logs no Vercel dashboard
4. Teste em modo incógnito

---

**Última atualização:** 2026-02-21
