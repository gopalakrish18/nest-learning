# Commands to Keep in mind

## Generic Commands


## Prisma Commands:

### Install prisma
```npm install @prisma/client ```

### Install the postgresql package
```npm install pg```

To initialize the prisma to generate the schema file.

```npx prisma init```

In .env - include the postgresql database url
npx prisma migrate dev --name create_user - to create a migration file
npx prisma validate - To check any error in migration code.
npx prisma migrate status - To check any pending migration
npx prisma migrate reset - To revoke the last run migration