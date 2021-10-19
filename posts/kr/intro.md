---
title: '시작하기'
description: '브라우저와 node.js에서 사용할 수 있는 Promise 기반 HTTP 클라이언트 라이브러리'
next_title: '기본 예제'
next_link: '/kr/docs/example'
---

# Axios란?
Axios는 node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트 입니다. 그것은 *[동형](https://www.lullabot.com/articles/what-is-an-isomorphic-application)*입니다(동일한 코드베이스로 브라우저와 node.js에서 실행할 수 있습니다). 서버 사이드에서는 네이티브 node.js의 `http` 모듈을 사용하고, 클라이언트(브라우저)에서는 XMLHttpRequests를 사용합니다.

# 특징

- 브라우저를 위해 [XMLHttpRequests](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest) 생성
- node.js를 위해 [http](http://nodejs.org/api/http.html) 요청 생성
- [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) API를 지원
- 요청 및 응답 인터셉트
- 요청 및 응답 데이터 변환
- 요청 취소
- JSON 데이터 자동 변환
- [XSRF](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%9A%94%EC%B2%AD_%EC%9C%84%EC%A1%B0)를 막기위한 클라이언트 사이드 지원

# 설치

npm 사용하기:

```bash
$ npm install axios
```

bower 사용하기:

```bash
$ bower install axios
```

yarn 사용하기:

```bash
$ yarn add axios
```

jsDelivr CDN 사용하기:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

unpkg CDN 사용하기:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```