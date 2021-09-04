# cv - admin - frontend

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
$ vue --version
@vue/cli 4.5.12
$
$ yarn -v
1.22.10
```

## create project

```
$ yarn create @vitejs/app admin
yarn create v1.22.10
[1/4] Resolving packages...
warning @vitejs/create-app@2.5.1: This package has been moved to create-vite, use npm init vite@latest instead
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "@vitejs/create-app@2.5.1" with binaries:
      - create-app
      - cva

@vitejs/create-app is deprecated, use npm init vite instead

✔ Select a framework: › vue
✔ Select a variant: › vue-ts

Scaffolding project in /home/sky0621/work/src/github.com/sky0621/cv/admin...

Done. Now run:

  cd admin
  yarn
  yarn dev

Done in 19.53s.
```

## use

### vue-router

https://github.com/vuejs/vue-router-next#quickstart

```
yarn add vue-router@4
```

### PRIME VUE

https://primefaces.org/primevue/showcase/#/setup

```
yarn add primevue@3.6.0
yarn add primeicons
```

#### primeflex

https://primefaces.org/primevue/showcase/#/primeflex

```
yarn add primeflex@2.0.0
```

### lint

```
yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript
```

```
yarn add -D husky lint-staged
```

### prettier

```
yarn add -D prettier eslint-plugin-prettier @vue/eslint-config-prettier
```

### stylelint

```
yarn add -D stylelint stylelint-config-recommended stylelint-config-standard
```

### sass

```
yarn add -D sass
```

#### axios

```
yarn add axios
```

#### vuelidate

```
yarn add vuelidate

yarn add -D @vuelidate/core

yarn add -D @vuelidate/validators
```