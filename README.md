# cv

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
$ yarn create @vitejs/app cv
yarn create v1.22.10
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "@vitejs/create-app@2.4.4" with binaries:
      - create-app
      - cva
✔ Select a framework: › vue
✔ Select a variant: › vue-ts
    ...
```

## use

### vue-router

https://github.com/vuejs/vue-router-next#quickstart

### PRIME VUE

https://primefaces.org/primevue/showcase/#/setup

#### primeflex

https://primefaces.org/primevue/showcase/#/primeflex

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
