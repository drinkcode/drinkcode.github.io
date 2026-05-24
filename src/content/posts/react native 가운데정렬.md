---
title: "react native 가운데정렬"
tags: ["react native"]
created: "2021-12-28T09:26:20.529Z"
modified: "2021-12-28T09:42:03.503Z"
urlPath: "react native 가운데정렬"
---

# react native 가운데정렬

```javascript
import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

class Login extends Component {
  render() {
    return (
      <View style={styles.login}>
        <Text> Login </Text>
      </View>
    )
  }
}

export default Login
```

위 코드에서 alignItems는 가로로 가운데 정렬, justifyContent는 세로로 가운데 정렬, 하지만 flex 방향에 따라서 가로 세로 기준이 바뀔 수 있다

![가운데 정렬](https://i.imgur.com/n4DVf3q.png)
