# .env

You'll need a .env for the repo to work locally. here's an example below:

```
DATABASE_URL='mysql://xxxxx@aws.connect.psdb.cloud/roadmap-investidor?sslaccept=strict'

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="RANDOM_STR"

GOOGLE_CLIENT_ID='xxxxx.apps.googleusercontent.com'
GOOGLE_CLIENT_SECRET='xxxxx'
```

login only works with Google. Features related to login and track progress will require a google_client_id, and a DB. But otherwise, it'll work without it.


# Installation

```
npm i
npm run dev
```

if you're doing logged-in features, we're using Prisma.
- [Prisma](https://prisma.io)

run 
```
npx prisma db push
```
to migrate the db


# Do's and dont's

- Feel free to rewrite any guide, change the links, change the recommended books, add topics, etc. This is meant to be community driven

- Don't self promote.
