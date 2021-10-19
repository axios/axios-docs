---
title: 'Axios API'
description: 'Axios API 레퍼런스'
prev_title: 'POST 요청'
prev_link: '/kr/docs/post_example'
next_title: 'Axios 인스턴스'
next_link: '/kr/docs/instance'
---

`axios`에 해당 config을 전송하면 요청이 가능합니다.

##### axios(config)

```js
// POST 요청 전송
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// node.js에서 GET 요청으로 원격 이미지 가져오기
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// GET 요청 전송 (기본값)
axios('/user/12345');
```

###  요청 메소드 명령어

편의를 위해 지원하는 모든 요청 메소드의 명령어를 제공합니다.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### 참고
명령어 메소드를 사용시 'url', 'method', 'data' 속성을 config에서 지정할 필요가 없습니다.