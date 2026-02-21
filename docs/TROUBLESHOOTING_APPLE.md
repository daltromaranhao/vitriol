# 🔍 DIAGNÓSTICO: Erro "invalid_client" - Apple Sign In

**Erro recebido:** `invalid_client - Invalid client`

Este erro significa que a Apple não está reconhecendo a configuração do seu aplicativo.

---

## ✅ CHECKLIST DE VERIFICAÇÃO

### PASSO 1: Verificar Services ID na Apple Developer

1. **Acesse:** https://developer.apple.com/account
2. **Navegue:** Certificates, Identifiers & Profiles → **Identifiers**
3. **Filtro:** No dropdown superior, selecione **"Services IDs"**

**Você deve ver:**
```
┌────────────────────────────────────────────┐
│ Identifiers                                │
│ [App IDs ▼] ← MUDAR PARA "Services IDs"   │
├────────────────────────────────────────────┤
│ ⚪ Vitriol Web                             │
│    io.vitriol.web                          │
│    Sign in with Apple: Enabled             │
└────────────────────────────────────────────┘
```

4. **Clique** em "Vitriol Web" (ou no seu Services ID)

---

### PASSO 2: Verificar Configuração do Sign in with Apple

Na tela de detalhes do Services ID:

```
┌────────────────────────────────────────────────────┐
│ Edit your Services ID                              │
├────────────────────────────────────────────────────┤
│ Description:  Vitriol Web                          │
│ Identifier:   io.vitriol.web                       │
│                                                    │
│ ☑ Sign in with Apple                              │
│   [Configure]  ← CLICAR AQUI                       │
└────────────────────────────────────────────────────┘
```

**⚠️ CRÍTICO:** Verifique se a checkbox está **MARCADA** ✅

---

### PASSO 3: Verificar Domínios e Return URLs

Ao clicar em **"Configure"**, deve abrir um popup.

**VERIFIQUE SE ESTÁ EXATAMENTE ASSIM:**

#### Primary App ID:
```
[Vitriol ▼]  ou  [io.vitriol.app ▼]
```
Deve estar selecionado o App ID que você criou.

#### Domains and Subdomains:
```
☑ localhost
☑ vitriol.io
☑ www.vitriol.io
☑ vitriol.global
☑ www.vitriol.global
```

**IMPORTANTE:** Cada domínio deve estar em uma linha separada!

#### Return URLs (Web Redirect URLs):
```
☑ http://localhost:3000/api/auth/callback/apple
☑ https://vitriol.io/api/auth/callback/apple
☑ https://www.vitriol.io/api/auth/callback/apple
☑ https://vitriol.global/api/auth/callback/apple
☑ https://www.vitriol.global/api/auth/callback/apple
```

**IMPORTANTE:** 
- URLs devem ser **EXATAS** (sem `/` no final)
- Devem ter `https://` (exceto localhost)
- Cada URL em uma linha separada

---

### PASSO 4: SALVAR CORRETAMENTE

**ATENÇÃO:** Você precisa salvar em 3 lugares!

1. No popup de configuração: Clique **"Next"** ou **"Save"**
2. No popup: Clique **"Done"**
3. Na tela do Services ID: Clique **"Save"** ou **"Continue"**

**❌ ERRO COMUM:** Muitas pessoas esquecem de clicar "Save" final!

---

### PASSO 5: Verificar no Vercel

Acesse: https://vercel.com/dashboard → Projeto vitriol → Settings → Environment Variables

**Verifique se tem EXATAMENTE:**

```
Name:  APPLE_CLIENT_ID
Value: io.vitriol.web
Environment: ✅ Production

Name:  APPLE_CLIENT_SECRET  
Value: eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5TUjVVTDRZSjUifQ...
Environment: ✅ Production
```

**⚠️ IMPORTANTE:**
- Valores devem ser EXATOS
- Sem espaços extras
- Ambiente "Production" marcado
- Se mudou, precisa fazer REDEPLOY

---

## 🔧 COMO CORRIGIR

Se algo estiver errado na configuração da Apple:

### Correção 1: Adicionar/Corrigir Domínios

1. Acesse Apple Developer → Identifiers → Services IDs
2. Clique no seu Services ID
3. Clique em **"Configure"** ao lado de "Sign in with Apple"
4. **Adicione os domínios** que faltam:
   - `vitriol.io`
   - `www.vitriol.io`
   - `vitriol.global`
   - `www.vitriol.global`
5. **Adicione as Return URLs** que faltam (veja PASSO 3 acima)
6. Clique **"Next"** → **"Done"** → **"Save"** (3 cliques!)
7. **AGUARDE 5-10 minutos** para propagar

### Correção 2: Verificar Client ID

O Client ID usado deve ser **EXATAMENTE:**
```
io.vitriol.web
```

Se você usou outro nome (como `com.vitriol.web`), precisa:
- OU criar novo Services ID com `io.vitriol.web`
- OU atualizar `APPLE_CLIENT_ID` no Vercel e regenerar o secret

### Correção 3: Verificar Return URL Específica

A URL que a Apple está recebendo quando você faz login é:
```
https://vitriol.io/api/auth/callback/apple
```

**ESTA URL EXATA** deve estar na lista de Return URLs!

---

## 🧪 TESTE PASSO A PASSO

### Teste 1: Verificar URL de Callback

1. Abra: https://vitriol.io/auth/login
2. Abra o **Console do Navegador** (F12 → Console)
3. Clique em "Continue with Apple"
4. **ANTES de fazer login**, copie a URL para onde foi redirecionado
5. Ela deve conter: `redirect_uri=https%3A%2F%2Fvitriol.io%2Fapi%2Fauth%2Fcallback%2Fapple`

Se a URL estiver diferente, há um problema na configuração do NextAuth.

### Teste 2: Verificar Client ID

Na mesma URL, procure por: `client_id=`

Deve mostrar: `client_id=io.vitriol.web`

Se mostrar outro valor, o APPLE_CLIENT_ID no Vercel está errado.

---

## 🚨 ERROS COMUNS E SOLUÇÕES

### Erro 1: "Esqueci de salvar"
**Sintoma:** Configurei tudo mas ainda dá erro  
**Solução:** Volte na Apple Developer e clique em "Save" no final

### Erro 2: "Return URL com www"
**Sintoma:** Configurei vitriol.io mas acesso www.vitriol.io  
**Solução:** Adicione AMBAS as URLs (com e sem www)

### Erro 3: "Variável não atualizada"
**Sintoma:** Mudei no Vercel mas ainda dá erro  
**Solução:** Faça REDEPLOY após mudar variáveis

### Erro 4: "URL com barra final"
**Sintoma:** Adicionei `https://vitriol.io/api/auth/callback/apple/`  
**Solução:** Remova a `/` final. Deve ser exatamente como mostrado

### Erro 5: "Client ID diferente"
**Sintoma:** Criei Services ID com nome diferente  
**Solução:** Use o mesmo Identifier configurado no script

---

## 📋 SCRIPT DE VERIFICAÇÃO

Execute isso no console do navegador (F12) na página de login:

```javascript
// Na página de login, execute:
console.log('NEXTAUTH_URL:', window.location.origin);
console.log('Callback esperado:', window.location.origin + '/api/auth/callback/apple');

// Depois de clicar em "Continue with Apple", na tela da Apple:
console.log('URL atual:', window.location.href);
```

**Compare o resultado** com o que está configurado na Apple Developer.

---

## ✅ SOLUÇÃO RÁPIDA (MAIS COMUM)

**O problema mais comum é:**

1. Services ID configurado, mas **não salvou** após adicionar domínios
2. Return URLs adicionadas, mas **não clicou "Done" → "Save"**

**SOLUÇÃO:**

1. Vá em: https://developer.apple.com/account
2. Identifiers → Services IDs → Vitriol Web
3. Configure → Adicione novamente as Return URLs
4. **IMPORTANTE:** Clique Next → Done → **SAVE**
5. Aguarde 5 minutos
6. Teste novamente

---

## 🔄 SE NADA FUNCIONAR

Crie um Services ID do ZERO:

1. Delete o Services ID atual (se possível)
2. Crie novo: Identifier = `io.vitriol.web.v2`
3. Configure domínios e Return URLs
4. Salve corretamente (3 cliques)
5. Atualize Vercel com novo Client ID
6. Regenere o secret com novo Client ID
7. Teste

---

## 📞 PRECISA DE AJUDA?

Me envie:
1. ✅ Screenshot da configuração do Services ID na Apple
2. ✅ Screenshot das variáveis de ambiente no Vercel
3. ✅ A URL completa que aparece quando clica em "Continue with Apple"

Vou identificar exatamente o problema! 🔍
