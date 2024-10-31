# Meu CRUD em TS
Esta pasta irá conter meu projeto pessoal de um CRUD em TS, apresentando minha evolução na criação e manutenção do código. 😎

Estrutura do projeto:
CRUD-Training/
├── dist/
├── prisma/
│       └── migrations/
│       └── schema.prisma
├── src/
│   └── app/
│       └── connection
│       └── repository
│       └── controllers
│       └── routes
│       └── server.ts  // Servidor
├── node_modules/
├── .env
├── .gitignore
├── package.json
└── tsconfig.json

Ao clonar o projeto iniciar criar um banco no Pg chamado "meudatabase", e realizar os seguintes comandos:
npm i
npx prisma db push
npx prisma migrate dev --name meudatabase
npx tsc --watch
npm start


