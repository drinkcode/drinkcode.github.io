---
title: "typescript eslint 설정"
tags: ["typescript"]
created: "2021-12-21T09:42:05.996Z"
modified: "2021-12-21T10:05:06.809Z"
urlPath: "typescript eslint 설정"
---

![typescript](/images/typescript_image.png)

# typescript eslint 설정

vscode eslint 확장프로그램 설치

```bash
yarn add --dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
}
```

## eslint 실행

```bash
yarn run eslint [폴더위치] --ext .js,.jsx,.ts,.tsx
yarn run eslint . --ext .js,.jsx,.ts,.tsx
```

## airbnb lint 적용하기

```bash
yarn add -D eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0
```

```js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-typescript"],
}
```

## 참고문서

[공식 typescript eslint](https://typescript-eslint.io/docs/linting/)

[eslint-config-airbnb-typescript npm](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
