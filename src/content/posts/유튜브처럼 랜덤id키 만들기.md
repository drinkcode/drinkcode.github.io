---
title: "유튜브처럼 랜덤id키 만들기"
tags: ["유튜브키"]
created: "2019-12-06T09:23:44.472Z"
modified: "2020-11-21T06:26:27.132Z"
urlPath: "유튜브처럼 랜덤id키 만들기"
---

![youtube](/images/youtube.png)

# 유튜브처럼 랜덤id키 만들기

```js
function makeId(length) {
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

makeId(11)
```

# Reference

[유튜브 id 동작원리 영상](https://www.youtube.com/watch?v=gocwRvLhDf8)
