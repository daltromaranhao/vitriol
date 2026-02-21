# 🍎 Apple Sign In - Guia Ultra Detalhado

**Tempo estimado:** 20-30 minutos  
**Custo:** Apple Developer Account ($99/ano)  
**Dificuldade:** Média

---

## 📋 O QUE VOCÊ VAI PRECISAR

Antes de começar, tenha em mãos:

✅ **Apple Developer Account ativo** ($99/ano)
   - Se não tem: https://developer.apple.com/programs/enroll/
   - Processo de aprovação pode levar 24-48h

✅ **Acesso ao computador** (Mac, Windows ou Linux)

✅ **Node.js instalado** (para rodar o script de geração)
   - Verificar: `node --version` (deve mostrar v18 ou superior)

✅ **Git instalado e repositório clonado**
   ```bash
   git clone https://github.com/daltromaranhao/vitriol.git
   cd vitriol
   ```

✅ **Um bloco de notas** para anotar:
   - Team ID
   - Key ID  
   - Client ID

---

## 🎯 O QUE VAMOS FAZER

Vamos criar 3 componentes no Apple Developer:

1. **App ID** - Identifica seu aplicativo iOS/Mac
2. **Services ID** - Identifica seu serviço web (CLIENT_ID)
3. **Private Key** - Assina o token JWT (para gerar CLIENT_SECRET)

Depois vamos gerar o Client Secret e configurar no Vercel.

---

## 🚀 COMEÇANDO - PASSO 0: Acessar Apple Developer

### 0.1 - Abrir o navegador

1. Abra seu navegador preferido (Chrome, Safari, Firefox, Edge)
2. Digite na barra de endereço:
   ```
   https://developer.apple.com/account
   ```
3. Pressione Enter

### 0.2 - Fazer Login

**Tela que você verá:**
```
┌─────────────────────────────────────────┐
│         🍎 Apple Developer              │
│                                         │
│   Sign in with your Apple ID            │
│                                         │
│   [  Email ou telefone  ]               │
│   [  ____________      ]                │
│                                         │
│   [      Continuar      ]               │
│                                         │
└─────────────────────────────────────────┘
```

**O que fazer:**
1. Digite seu **Apple ID** (email) no campo
2. Clique no botão **"Continuar"** (azul)
3. Digite sua **senha**
4. Se tiver autenticação de dois fatores (2FA):
   - Verifique seu iPhone/iPad/Mac
   - Digite o código de 6 dígitos
   - Clique **"Confiar"** se perguntado

### 0.3 - Aceitar Termos (se solicitado)

Se for seu primeiro acesso ou houve atualização nos termos:

```
┌─────────────────────────────────────────┐
│  Apple Developer Program License        │
│  Agreement                              │
│                                         │
│  [texto do contrato...]                 │
│                                         │
│  [ ] I have read and agree to be       │
│      bound by the Apple Developer      │
│      Program License Agreement         │
│                                         │
│  [  Cancel  ]  [  Submit  ]            │
└─────────────────────────────────────────┘
```

**O que fazer:**
1. ✅ Marque a checkbox
2. Clique **"Submit"**

### 0.4 - Navegar para Certificates, Identifiers & Profiles

**Dashboard inicial:**
```
┌──────────────────────────────────────────────┐
│  🍎 Apple Developer                          │
│  ┌────────────┬────────────┬──────────────┐ │
│  │ Overview   │ Membership │ Certificates │ │
│  └────────────┴────────────┴──────────────┘ │
│                                              │
│  Account:  [Seu Nome]                        │
│  Role:     [Agent/Admin]                     │
│                                              │
│  Quick Links:                                │
│  • Certificates, Identifiers & Profiles  ←── │
│  • App Store Connect                         │
│  • Forums                                    │
└──────────────────────────────────────────────┘
```

**O que fazer:**
1. Procure no menu lateral esquerdo: **"Certificates, Identifiers & Profiles"**
2. Clique nele
3. Ou clique no link azul em "Quick Links"

**✅ Pronto! Você está na tela correta para começar!**

---

## PASSO 2: Criar App ID

### 2.1 Iniciar criação

1. No menu lateral esquerdo, clique em **"Identifiers"**
2. Clique no botão **"+"** (azul, canto superior esquerdo)
3. Selecione **"App IDs"**
4. Clique **"Continue"**

### 2.2 Selecionar tipo

1. Selecione **"App"** (primeira opção)
2. Clique **"Continue"**

### 2.3 Configurar o App ID

**Description:**
```
Vitriol
```

**Bundle ID:**
- Selecione: **"Explicit"**
- Digite:
```
io.vitriol.app
```
*(ou use seu domínio ao contrário: com.seudominio.app)*

### 2.4 Habilitar Sign in with Apple

1. Role a página para baixo até **"Capabilities"**
2. Encontre **"Sign in with Apple"**
3. ✅ **Marque a checkbox** "Sign in with Apple"
4. Role até o final e clique **"Continue"**
5. Revise as informações
6. Clique **"Register"**

**✅ Sucesso:** App ID criado!

---

## PASSO 3: Criar Services ID (Client ID)

### 3.1 Iniciar criação

1. Ainda em **"Identifiers"**, clique no botão **"+"** novamente
2. Agora selecione **"Services IDs"**
3. Clique **"Continue"**

### 3.2 Configurar o Services ID

**Description:**
```
Vitriol Web
```

**Identifier (este será seu APPLE_CLIENT_ID!):**
```
io.vitriol.web
```

⚠️ **IMPORTANTE:** Anote este identifier - você usará como `APPLE_CLIENT_ID`

### 3.3 Habilitar Sign in with Apple

1. ✅ Marque a checkbox **"Sign in with Apple"**
2. Clique no botão **"Configure"** que apareceu ao lado

### 3.4 Configurar Domínios e URLs

Uma janela popup abrirá. Configure:

**Primary App ID:**
- Selecione o App ID que você criou no Passo 2: **"Vitriol"**

**Domains and Subdomains:**

Clique em **"+"** e adicione cada domínio (um por vez):

```
localhost
vitriol.io
www.vitriol.io
vitriol.global
www.vitriol.global
```

**Return URLs:**

Clique em **"+"** e adicione cada URL (uma por vez):

```
http://localhost:3000/api/auth/callback/apple
https://vitriol.io/api/auth/callback/apple
https://www.vitriol.io/api/auth/callback/apple
https://vitriol.global/api/auth/callback/apple
https://www.vitriol.global/api/auth/callback/apple
```

⚠️ **ATENÇÃO:** 
- URLs devem ser EXATAS (sem / no final)
- Cada domínio e URL deve ser adicionado separadamente

### 3.5 Finalizar

1. Clique **"Next"** no popup
2. Clique **"Done"** 
3. Clique **"Continue"**
4. Clique **"Register"**

**✅ Sucesso:** Services ID criado!

---

## PASSO 4: Criar Private Key (.p8)

### 4.1 Iniciar criação

1. No menu lateral, clique em **"Keys"**
2. Clique no botão **"+"**

### 4.2 Configurar a Key

**Key Name:**
```
Vitriol Sign In Key
```

### 4.3 Habilitar Sign in with Apple

1. ✅ Marque **"Sign in with Apple"**
2. Clique **"Configure"** ao lado

### 4.4 Selecionar Primary App ID

1. No popup, selecione: **"Vitriol"** (o App ID do Passo 2)
2. Clique **"Save"**

### 4.5 Registrar e Download

1. Clique **"Continue"**
2. Clique **"Register"**
3. ⚠️ **CRÍTICO:** Aparecerá uma tela com:
   - **Download Your Key** (botão azul)
   - **Key ID** (algo como: ABC123XYZ)

**FAÇA AGORA:**

✅ **Copie e salve o Key ID** (você precisará dele!)
```
Key ID: ___________________
```

✅ **Clique "Download"** - Arquivo baixado: `AuthKey_ABC123XYZ.p8`

⚠️ **ATENÇÃO:** Você só pode baixar este arquivo UMA VEZ! Guarde-o com segurança!

4. Clique **"Done"**

**✅ Sucesso:** Private Key criada e baixada!

---

## PASSO 5: Localizar seu Team ID

### 5.1 Acessar Membership

1. No menu superior direito, clique no seu nome
2. Selecione **"View Membership"**
3. Ou acesse diretamente: https://developer.apple.com/account/#!/membership

### 5.2 Copiar Team ID

Você verá uma tabela com suas informações:

**Team ID:** (algo como: A1B2C3D4E5)

✅ **Copie e salve:**
```
Team ID: ___________________
```

---

## PASSO 6: Gerar Client Secret (JWT)

Agora vamos usar o script que preparamos para gerar o Client Secret.

### 6.1 Preparar o arquivo .p8

1. Mova o arquivo `AuthKey_ABC123XYZ.p8` que você baixou para a pasta `scripts/` do projeto:

```bash
mv ~/Downloads/AuthKey_*.p8 scripts/
```

### 6.2 Editar o script

Abra o arquivo `scripts/generate-apple-secret.js` e atualize as configurações:

```javascript
const CONFIG = {
  // Seu Team ID (do Passo 5)
  TEAM_ID: 'A1B2C3D4E5',  // ← SUBSTITUIR
  
  // Seu Services ID (do Passo 3)
  CLIENT_ID: 'io.vitriol.web',  // ← VERIFICAR
  
  // Seu Key ID (do Passo 4)
  KEY_ID: 'ABC123XYZ',  // ← SUBSTITUIR
  
  // Nome do arquivo .p8 que você baixou
  KEY_FILE: path.join(__dirname, 'AuthKey_ABC123XYZ.p8'),  // ← ATUALIZAR
  
  // Válido por 180 dias (6 meses)
  VALIDITY_DAYS: 180,
};
```

### 6.3 Executar o script

```bash
cd /home/vitriol/vitriol
node scripts/generate-apple-secret.js
```

### 6.4 Resultado esperado

O script mostrará algo como:

```
🍎 Apple Sign In - Client Secret Generator

✅ Client Secret generated successfully!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Configuration:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Team ID:       A1B2C3D4E5
Client ID:     io.vitriol.web
Key ID:        ABC123XYZ
Valid for:     180 days
Expires on:    21/08/2026 12:48:53
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Add these to your .env file:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLE_CLIENT_ID="io.vitriol.web"
APPLE_CLIENT_SECRET="eyJhbGciOiJFUzI1NiIsImtpZCI6IkFCQzEyM1hZWiJ9..."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

✅ **Copie o APPLE_CLIENT_SECRET** (o token JWT longo)

---

## PASSO 7: Configurar Environment Variables

### 7.1 Para desenvolvimento local

Crie ou edite `.env.local`:

```bash
# Apple OAuth
APPLE_CLIENT_ID="io.vitriol.web"
APPLE_CLIENT_SECRET="eyJhbGciOiJFUzI1NiIsImtpZCI6IkFCQzEyM1hZWiJ9.eyJpc3MiOiJBMUIyQzNENEU1IiwiaWF0IjoxNzA4NTI0NTMzLCJleHAiOjE3MjQxNjQ1MzMsImF1ZCI6Imh0dHBzOi8vYXBwbGVpZC5hcHBsZS5jb20iLCJzdWIiOiJpby52aXRyaW9sLndlYiJ9..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-secret-key-gerada-com-openssl"
```

### 7.2 Para produção (Vercel)

1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto **vitriol**
3. Vá em **Settings** → **Environment Variables**
4. Adicione as variáveis:

**Para vitriol.io:**

| Name | Value | Environment |
|------|-------|-------------|
| `APPLE_CLIENT_ID` | `io.vitriol.web` | Production |
| `APPLE_CLIENT_SECRET` | `eyJhbGci...` (o token JWT) | Production |
| `NEXTAUTH_URL` | `https://vitriol.io` | Production |
| `NEXTAUTH_SECRET` | (gerar novo) | Production |

**Para vitriol.global:**

| Name | Value | Environment |
|------|-------|-------------|
| `APPLE_CLIENT_ID` | `io.vitriol.web` | Production |
| `APPLE_CLIENT_SECRET` | `eyJhbGci...` (o token JWT) | Production |
| `NEXTAUTH_URL` | `https://vitriol.global` | Production |
| `NEXTAUTH_SECRET` | (gerar novo) | Production |

5. Clique **Save**
6. Faça um novo deploy (ou ele fará automaticamente)

---

## PASSO 8: Testar

### 8.1 Teste Local (limitado)

⚠️ Apple Sign In tem limitações em localhost:

```bash
npm run dev
```

Visite: http://localhost:3000/auth/login

**Nota:** Pode não funcionar perfeitamente em localhost, especialmente no Safari/iOS.

### 8.2 Teste em Produção (recomendado)

1. Faça deploy no Vercel
2. Acesse: https://vitriol.io/auth/login
3. Clique em **"Continue with Apple"**
4. Será redirecionado para a tela de login da Apple
5. Autorize o app
6. Deve redirecionar de volta para `/dashboard` ou `/onboarding`

### 8.3 Verificar no banco de dados

Após login bem-sucedido, verifique:

```bash
npx prisma studio
```

Tabelas para verificar:
- `User` - novo usuário criado
- `Account` - provider: "apple"
- `Profile` - dados do perfil

---

## ✅ CHECKLIST FINAL

### Apple Developer Console
- [ ] App ID criado com Sign in with Apple
- [ ] Services ID criado e configurado
- [ ] 5 domínios adicionados (localhost, vitriol.io, www.vitriol.io, vitriol.global, www.vitriol.global)
- [ ] 5 Return URLs adicionadas
- [ ] Private Key (.p8) baixada e guardada com segurança
- [ ] Team ID anotado
- [ ] Key ID anotado

### Script e Configuração
- [ ] Arquivo .p8 movido para pasta scripts/
- [ ] Script `generate-apple-secret.js` configurado com Team ID, Client ID, Key ID
- [ ] Script executado com sucesso
- [ ] Client Secret (JWT) gerado e copiado

### Environment Variables
- [ ] `APPLE_CLIENT_ID` configurado
- [ ] `APPLE_CLIENT_SECRET` configurado
- [ ] `NEXTAUTH_URL` configurado
- [ ] `NEXTAUTH_SECRET` gerado e configurado
- [ ] Variáveis adicionadas no Vercel para vitriol.io
- [ ] Variáveis adicionadas no Vercel para vitriol.global

### Testes
- [ ] Testado em produção (vitriol.io)
- [ ] Testado em produção (vitriol.global)
- [ ] Login bem-sucedido
- [ ] Usuário criado no banco de dados
- [ ] Redirect funcionando corretamente

---

## 🐛 PROBLEMAS COMUNS

### "invalid_client"
**Causa:** Client Secret expirado ou inválido  
**Solução:** Gere um novo Client Secret rodando o script novamente

### "invalid_request" 
**Causa:** Return URL não configurada corretamente  
**Solução:** Verifique se todas as 5 URLs estão adicionadas exatamente como mostrado

### Não funciona em localhost
**Causa:** Apple tem limitações em localhost  
**Solução:** Use ngrok ou teste direto em produção

### Email vem como relay (hide my email)
**Causa:** Usuário escolheu ocultar email  
**Solução:** Normal! Apple permite isso. Use o email relay fornecido.

### Token expira depois de 6 meses
**Causa:** Client Secret (JWT) tem validade de 6 meses  
**Solução:** Adicione lembrete no calendário e regenere antes de expirar

---

## 📅 MANUTENÇÃO

### A cada 6 meses:

1. Execute o script novamente:
```bash
node scripts/generate-apple-secret.js
```

2. Atualize o `APPLE_CLIENT_SECRET` no Vercel

3. Faça um novo deploy

---

## 📞 SUPORTE

**Documentação oficial:**
- [Apple Sign In Documentation](https://developer.apple.com/sign-in-with-apple/)
- [Apple Sign In REST API](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api)

**Arquivos de referência no projeto:**
- `docs/OAUTH_SETUP.md` - Guia completo
- `docs/OAUTH_REDIRECT_URIS.md` - Lista de URLs
- `OAUTH_URLS.txt` - Referência rápida

---

**✅ Configuração completa!** Agora o Apple Sign In está funcionando no Vitriol! 🎉
