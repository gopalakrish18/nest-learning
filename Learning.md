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


### Create a Resource for inside src folder

```npx nest g resource <name>```
name - will be the controller name.

####Procedure to Create a Migration.

1. First define the model - eg : model/user.prisma
2. Add the required columns.
3. Then hit the cmd in cmd prompt
```npx prisma migrate dev --name create_countries_table --create-only```
create only generate the file in below folder:

migrations/
  └─ 20260901115331_add_state_status_column/
    └─ migration.sql
4. Then check for the sql query and deploy the database to create a Table

```npx prisma migrate deploy```
5. Then regenerate the Prisma
``` npx prisma generate ````