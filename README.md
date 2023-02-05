# backend-shop-api

This is backend shop api implementation with nesetjs

1. plan to use prisma as data access tool to database

2. use postgresql as database

## init project

```shell
nest new backend-shop-api
```

## install primsa 

```shell
cd backend-shop-api
yarn add prisma -D
```
init data config

```shell
npx prisma init
```
install client 
```shell
yarn add @prisma/client
```
## setup graphql

```shell
yarn add @nestjs/graphql @nestjs/apollo graphql apollo-server-express
```

## prisma init data

```shell
npx prisma migrate dev
```

show data with primsa studio

```shell
npx prisma studio
```
## generate resource for graphql

```shell
nest g resource product
```