---
title: "ag-grid삽질"
tags: ["삽질"]
created: "2019-09-17T17:30:36.352Z"
modified: "2019-12-12T05:03:30.511Z"
urlPath: "ag-grid삽질"
---

![aggrid](/images/aggrid.jpeg)

# ag-grid삽질

onCellValueChanged 할 때는 값을 바로바로 수정할 수 있지만

cellRenderer같은 곳에선 rowNode.setData로 해야할 줄 알았는데 메모리 누수가 생긴다.

겨우겨우 알아낸게 props에서 바로 data로 접근할 수 있었다.

```javascript
const f_addCard = () => {
  rowNode.data.imageData = image

  setIsImageModal(!isImageModal)
}
```

여기서 rowNode는 props이다

다시 한 번 알아낸것, 문제는 Modal이었다.  
모달이 켜질 때 DataTableContainer는 unmount 되기 때문에 자꾸 메모리 누수 문제가 생겼던 것이었다.  
이걸 해결하기 위해선 모달을 꺼줌과 동시에 값을 할당해주면 된다

```javascript
const f_addCard = () => {
  console.log(rowNode)

  setIsImageModal(!isImageModal)
  rowNode.node.setDataValue("imageData", image)
}
```
