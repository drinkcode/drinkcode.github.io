---
title: "dynamodb 예약어 에러 & 빈 값 전달 에러"
tags: ["다이나모디비", "에러모음"]
created: "2019-10-15T02:58:39.997Z"
modified: "2019-12-12T05:16:10.661Z"
urlPath: "dynamodb 예약어 에러 & 빈 값 전달 에러"
---

![dynamodb](/images/dynamodb.png)

# 에러

## 예약어 에러

```bash
Attribute name is a reserved keyword; reserved keyword
```

dynamodb 에서 이미 사용하고 있는 예약어로 `ExpressionAttributeNames`를 사용해서 해결할 수 있다.

```js
const params = {
  TableName: TABLE_NAME,
  Key: {
    username: username,
  },
  UpdateExpression: `SET decks[${deckIndex}].cards[${cardIndex}].#cycle = :cycle`,
  ExpressionAttributeNames: {
    "#cycle": "cycle",
  },
  ExpressionAttributeValues: {
    // 수정할 것의 값을 정해줘야합니다.
    ":cycle": cycle,
  },
}
```

위 코드에서 cycle 은 예약어여서 cycle 앞에 #을 붙여주고 ExpressionAttributeNames 에서 #cycle 을 명시해주고 있다.

## 빈 값 전달 에러

dynamodb 로 값을 전달 할 때 빈 string 값을 전달하면 실행에러가 뜬다.

# Reference

[https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/ReservedWords.html](https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/ReservedWords.html)
