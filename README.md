This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Install
run `yarn install`;

### RUN migrations
run `npx drizzle-kit migrate --config=./src/db/config.ts`

### start project
run `yarn dev`

### View database GUI

run `npx drizzle-kit studio --config ./src/db/config.ts`

open browser and go to `https://local.drizzle.studio/`


### Record page

open browser and go to `http://localhost:3000/?sessionId=4`
sessionId is important as it maps userevents to a session;

click on replay session to view it.


