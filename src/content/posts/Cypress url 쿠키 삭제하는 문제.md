---
title: "Cypress url 쿠키 삭제하는 문제"
tags: ["cypress"]
created: "2021-12-28T09:26:20.529Z"
modified: "2021-12-28T09:42:03.503Z"
urlPath: "Cypress url 쿠키 삭제하는 문제"
---

![cypress](/images/cypress.png)

# Cypress url 쿠키 삭제하는 문제

Cypress를 사용하다보면 인증 후 개발환경에서 잘 작동하던것처럼 작동하지 않는 경우가 있었다.
왜인고 하니 cypress 자체가 각 테스트를 하기전 localstrage와 cookie를 삭제하는 문제가 있었다

다음 코드를 추가해주면 위 문제를 해결된다

## localstorage 보존

```js
beforeEach(() => {
  cy.restoreLocalStorage()
})

afterEach(() => {
  cy.saveLocalStorage()
})
```

## cookie 보존

```js

before(() => {
    Cypress.Cookies.preserveOnce('쿠키이름1', '쿠키이름2', '쿠키이름3' ...)
})

```
