# cv - admin - backend

## env

```
$ cat /etc/os-release
NAME="Ubuntu"
VERSION="20.04.2 LTS (Focal Fossa)"
$
$ nvm version
v16.0.0
$
$ node -v
v16.0.0
$
$ npm -v
7.10.0
$
$ yarn -v
1.22.10
```

## create project

```
yarn init
```

## use

### express

```
yarn add express

yarn add -D @types/express
```

### prisma

```
yarn add @prisma/client

yarn add -D prisma
```

### ts-node

```
yarn add -D ts-node

yarn add -D @types/node
```

### typescript

```
yarn add -D typescript
```

### cors

```
yarn add cors

yarn add -D @types/cors
```

## setup

### prisma

https://www.prisma.io/

```
npx prisma init

npx prisma introspect

npx prisma generate
```