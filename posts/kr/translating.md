---
title: '문서 번역'
---

가능한 많은 사람들이 Axios를 사용할 수 있도록 하려면 이 문서를 가능한 많은 언어로 읽을 수 있어야 합니다. 
번역에 기여하고자 하는 모든 분들을 환영합니다.
여기에서 새 번역을 추가하는 방법을 찾을 수 있습니다.

## 구조

각 번역은 구성 파일 `{language-shortcut}.lang.js` (예를 들어, `en.lang.js` 또는 `de.lang.js`)과 번역된 문서 파일 `posts/{language-shortcut}/*.md` (예를 들어, `posts/en` 또는 `posts/de`)로 구성됩니다.
`{language-shortcut}`는 당신의 언어의 [ISO 639-1](https://ko.wikipedia.org/wiki/ISO_639-1) 2글자 코드로 대체되어야 합니다.

## 당신의 언어 구성하기

 - `en.lang.js` 사본 생성
 - `{language-shortcut}.lang.js`으로 이름 변경
 - `표시되는` 언어의 이름을 변경, 예를 들어 “Korean” 대신 “한국어”가 들어가야 합니다.
 - 프리픽스를 `/{language-shortcut}/`로 변경
 - `p` 와 `t` 필드의 내용 번역
 - 사이드바에서 `text` 라벨이 된 요소 번역 **참고:** 문서의 최신 버전 부터, 사이드바의 링크는 더이상 업데이트할 필요가 없습니다.

### 구성 등록하기

구성 파일을 작성한 후 프로젝트 구성 파일에 등록해야 합니다. `inert.config.js`파일을 열고 상단 근처에 다음 코드를 추가하세요:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

물론 `{language-shortuct}`을 정확한 [ISO 369-1](https://ko.wikipedia.org/wiki/ISO_639-1) 코드로 대체하는 것을 잊지마세요.

이제 `langs` 상수를 찾으세요. `require` 문 앞에 상수가 있을 경우, `require`를 상수 선언 앞으로 이동하세요. `langs` 목록에 다음 객체를 추가해야 합니다:

```js
const langs = [
  ...
  {
    name: '유니크한 당신의 언어 이름, 예를 들어 "English" or "한국어"',
    prefix: "구성 파일과 같은 프리픽스",
    config: {language-shortcut}Config // 위에서 임포트한 구성 파일
  }
  ...
];
```

이제, 당신은 파일 번역을 시작할 수 있습니다. `posts/en` 폴더를 복사해서 `posts/{language-shortcut}`로 이름을 바꾸고, 모든 파일을 번역하세요.

만약 어떠한 문제에 부딪히면, [이슈를 만들어주세요](https://github.com/axios/axios-docs/issues/new/choose).