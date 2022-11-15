# cv - app

## env

```
$ cat /etc/os-release
PRETTY_NAME="Ubuntu 22.04.1 LTS"
NAME="Ubuntu"
VERSION_ID="22.04"
VERSION="22.04.1 LTS (Jammy Jellyfish)"
$
$ node -v
v16.18.1
$
$ npm -v
8.19.2
$
$ yarn -v
1.22.19
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

### date-fns

```
yarn add date-fns
```