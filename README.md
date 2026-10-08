# ItsTomi Site

Site multipágina com Next.js, Tailwind CSS e integração oficial com Twitch OAuth.

## Páginas

- `/` - Home
- `/stream` - Stream da Twitch
- `/jogos` - Próximos jogos e casts
- `/parcerias` - Parcerias
- `/redes` - Redes sociais
- `/sobre` - Sobre mim

## Setup

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um ficheiro `.env.local` com as credenciais da Twitch:
   ```env
   TWITCH_CLIENT_ID="seu_client_id"
   TWITCH_CLIENT_SECRET="seu_client_secret"
   TWITCH_REDIRECT_URI="http://localhost:3000/api/auth/twitch/callback"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```

4. Rode o projeto:
   ```bash
   npm run dev
   ```

5. Abra http://localhost:3000

## Deploy no Netlify

- Build command: `npm run build`
- Publish directory: `.next`
- Adicione as mesmas variáveis no painel de environment do Netlify
- Atualize `TWITCH_REDIRECT_URI` para o domínio do Netlify

## Credenciais Twitch

Gere as credenciais em: https://dev.twitch.tv/console/apps

- OAuth Redirect URL: `http://localhost:3000/api/auth/twitch/callback` (ou seu domínio)
