---
title: "apollo @client 지시문 & 캐시에 data쓰기"
tags: ["apollo"]
created: "2021-09-11T13:36:27.219Z"
modified: "2021-09-11T13:36:42.618Z"
urlPath: "apollo @client 지시문 & 캐시에 data쓰기"
---

![apollo](/images/apollo.png)

# apollo client 지시문 & 캐시에 data쓰기

Apollo Client 가 캐시에서 가져 오도록 지정하는 것이다. @client 이렇게 붙여주기만 하면 된다 [Doc](https://www.apollographql.com/docs/tutorial/local-state)

`예시`

```javascript
import { Query, ApolloProvider } from "react-apollo"
import gql from "graphql-tag"

import Pages from "./pages"
import Login from "./pages/login"
import injectStyles from "./styles"

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

injectStyles()
ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN}>
      {({ data }) => (data.isLoggedIn ? <Pages /> : <Login />)}
    </Query>
  </ApolloProvider>,
  document.getElementById("root")
)
```

`직접 캐시에 쓰는 법`

```javascript
client.writeData({ data: { isLoggedIn: false } })
```

```javascript
import React from "react"
import styled from "react-emotion"
import { ApolloConsumer } from "react-apollo"

import { menuItemClassName } from "../components/menu-item"
import { ReactComponent as ExitIcon } from "../assets/icons/exit.svg"

export default function LogoutButton() {
  return (
    <ApolloConsumer>
      {client => (
        <StyledButton
          onClick={() => {
            client.writeData({ data: { isLoggedIn: false } })
            localStorage.clear()
          }}
        >
          <ExitIcon />
          Logout
        </StyledButton>
      )}
    </ApolloConsumer>
  )
}

const StyledButton = styled("button")(menuItemClassName, {
  background: "none",
  border: "none",
  padding: 0,
})
```
