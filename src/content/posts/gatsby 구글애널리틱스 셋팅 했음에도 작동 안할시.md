---
title: "gatsby 구글애널리틱스 셋팅 했음에도 작동 안할시"
tags: ["gatsby"]
created: "2021-12-28T09:26:20.529Z"
modified: "2021-12-28T09:42:03.503Z"
urlPath: "gatsby 구글애널리틱스 셋팅 했음에도 작동 안할시"
---

# gatsby 구글애널리틱스 셋팅 했음에도 작동 안할시

## 구글 애널리틱스 셋팅

1.  git bash에서 npm 명령어 실행

```bash
npm install --save gatsby-plugin-gtag
```

2.  `gatsby-config.js` 파일에 아래 코드 추가해주기

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-XXXXXXXX-X`, // 측정 ID
        head: false, // head에 tracking script를 넣고 싶다면 true로 변경
        anonymize: true,
      },
    },
  ],
}
```

💡 만약 위의 코드를 `gatsby-config.js`에 추가했는데도 전혀 추적이 되지 않고 있다면 gatsby-plugin-gtag를 플러그인 최상단에 배치하면 된다.

# Reference

[https://janeljs.github.io/blog/google-analytics/](https://janeljs.github.io/blog/google-analytics/)
