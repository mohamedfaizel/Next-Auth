heroiui
prisma with sqlite
github oAuth


npx create-next-app@latest
npm install @heroui/react framer-motion


<!-- Provider.tsx -->
<!-- In thia PP hERO UI COMPONENT NOT WORKING -->
import {HeroUIProvider} from "@heroui/react";
import {Button, Input} from "@heroui/react";

npm install prisma
npx prisma init --datasource-provider sqlite
replace schema file
npx prisma migrate dev


<!-- Github OAuth -->
Step: 1;
https://github.com/settings/applications/new
Application name: Next-Auth
Homepage URL: http://localhost:3000
Authorization callback URL: http://localhost:3000/api/auth/callback/github
Click: Register application
New page open with Client ID
Click: Generate a new client secret
Copy Client ID and Client Secret

Step: 2
create: env.local
GITHUB_CLIENT_ID="xxxx"
GITHUB_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
AUTH_SECRET="Randam types long charecters" Ex: "dkjsbgkfsjhgfdshnasbzvasffgfgfdsag"

Step 3
npm install @auth/prisma-adapter next-auth@beta
Add model : prisma\schema.prisma
Step 4
Add File: "src/auth.ts"

Step 5
Read the official documentation: https://authjs.dev/getting-started/installation?framework=next-js
Add File: src\app\api\auth\[...nextauth]\route.ts
Add File: src\actions\index.ts
Add Session provider in provider.ts
Add Login and Logout in page.tsx
Add File:  src\components\profile.tsx

Credential Auth example(feature)
https://authjs.dev/getting-started/authentication/credentials?framework=next-js