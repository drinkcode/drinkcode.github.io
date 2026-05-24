---
title: "antd최적화"
tags: ["ant design", "최적화"]
created: "2019-12-06T09:24:59.405Z"
modified: "2019-12-12T04:54:22.477Z"
urlPath: "antd최적화"
---

![ant design](/images/antd.png)

# antd최적화

## 다음 모듈 버젼 이상 설치

```
"antd": "4.0.0-alpha.4",
"@ant-design/icons": "^4.0.0-alpha.9",
```

## babel에 다음 코드 추가

```js
"plugins": [
      [
        "import",
        {
          "libraryName": "antd-mobile",
          "style": "css"
        }
      ]
    ]
```

## 아이콘을 사용할 때 예시

```js
import CaretLeftIcon from "@ant-design/icons/CaretLeft"
```

# antd 모바일 최적화

## html에 다음 추가

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
/>
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ("addEventListener" in document) {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        FastClick.attach(document.body)
      },
      false
    )
  }
  if (!window.Promise) {
    document.writeln(
      '<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' +
        ">" +
        "<" +
        "/" +
        "script>"
    )
  }
</script>
```

## babel에 다음 추가

```js
{
  "plugins": [
    ["import", { "libraryName": "antd-mobile", "style": "css" }] // `style: true` for less
  ]
}
```

## next에서 최적화

## 참고자료

[예제](https://github.com/zeit/next.js/blob/canary/examples/with-antd-mobile/next.config.js)

모듈설치

```bash
yarn add -D @zeit/next-css null-loader
```

```js
// next.config.js
const withCSS = require("@zeit/next-css")

module.exports = withCSS({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd-mobile\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader",
      })
    }
    return config
  },
})
```
