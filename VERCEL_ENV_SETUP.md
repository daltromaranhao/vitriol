# 🔐 Variáveis de Ambiente OBRIGATÓRIAS no Vercel

## ⚠️ IMPORTANTE: Configure ANTES de fazer redeploy

### 1. Acesse Vercel Dashboard

1. Vá para: https://vercel.com/seu-usuario/vitriol
2. Clique em **Settings** → **Environment Variables**

---

## 📋 Variáveis OBRIGATÓRIAS

### **DATABASE_URL** ✅ (JÁ CONFIGURADO)
```
DATABASE_URL=postgresql://neondb_owner:npg_HivEjTc6ne0V@ep-flat-grass-aimzibdi-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### **NEXTAUTH_URL** ⚠️ (FALTANDO - CAUSA 404!)
```
NEXTAUTH_URL=https://SEU_DOMINIO.vercel.app
```
**Exemplo:** `https://vitriol-abc123.vercel.app`

**Como obter:**
1. Após primeiro deploy, copie a URL do Vercel
2. Adicione esta variável
3. Redeploy o projeto

### **NEXTAUTH_SECRET** ⚠️ (FALTANDO - CAUSA 404!)

Gere um secret aleatório:

```bash
# No terminal (Mac/Linux):
openssl rand -base64 32

# Ou use este gerador online:
https://generate-secret.vercel.app/32
```

Copie o resultado e adicione:
```
NEXTAUTH_SECRET=resultado_do_comando_acima
```

---

## 🔧 Como Adicionar Variáveis no Vercel

### Método 1: Via Dashboard (Recomendado)

1. **Settings** → **Environment Variables**
2. Clique em **Add**
3. **Name:** `NEXTAUTH_URL`
4. **Value:** `https://SEU_DOMINIO.vercel.app`
5. **Environment:** Selecione **Production**, **Preview**, **Development**
6. Clique em **Save**
7. Repita para `NEXTAUTH_SECRET`

### Método 2: Via CLI

```bash
vercel env add NEXTAUTH_URL production
# Cole o valor quando solicitado

vercel env add NEXTAUTH_SECRET production
# Cole o secret quando solicitado
```

---

## 🚀 Após Configurar

1. **Redeploy** o projeto:
   - Dashboard → **Deployments** → **...** → **Redeploy**
   - Ou faça um novo commit e push

2. **Aguarde** ~2 minutos para build

3. **Teste** as URLs:
   ```
   https://SEU_DOMINIO.vercel.app/
   https://SEU_DOMINIO.vercel.app/pt-BR
   https://SEU_DOMINIO.vercel.app/en-US
   ```

---

## ✅ Checklist de Deploy

- [ ] `DATABASE_URL` configurado
- [ ] `NEXTAUTH_URL` configurado (com URL real do Vercel)
- [ ] `NEXTAUTH_SECRET` configurado (gerado aleatoriamente)
- [ ] Redeploy feito após adicionar variáveis
- [ ] Testado URL raiz `/`
- [ ] Testado `/pt-BR`

---

## 🐛 Se ainda der 404

### Verifique nos Logs:

1. Dashboard → **Deployments** → Clique no deployment
2. Vá em **Function Logs**
3. Procure por erros relacionados a:
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`
   - Middleware

### Variáveis Opcionais (podem adicionar depois):

```bash
# Google OAuth (opcional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Apple OAuth (opcional)
APPLE_CLIENT_ID=
APPLE_CLIENT_SECRET=
```

---

## 📞 Comando para Debug

Acesse a URL diretamente:
```
https://SEU_DOMINIO.vercel.app/pt-BR
```

Se esta URL funcionar mas `/` não funciona, o problema é apenas o redirect.

Se `/pt-BR` também der 404, o problema é nas variáveis de ambiente.
