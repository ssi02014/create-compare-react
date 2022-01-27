# 💻 만들고 비교하며 학습하는 리액트

## 📖 ch-1 Vanilla Javascript

- MVC 패턴으로 검색폼 구현하기

<br />

### 📄 lite-server 실행 명령어

```
  npx lite-server --baseDir vanilla
```

<br />

### 🙄 MVC란?

```
  Model, View, Controller의 약자. 소프트웨어 디자인 패턴의 하나로, 애플리케이션의 기능을 구분함으로, 정돈된 개발을 가능하게 한다
```

1. Model
   - `데이터` 및 `비즈니스 로직`을 담당한다.
   - ex) DB와 통신하여 데이터를 조회한다, 데이터를 가공하여 처리한다 등
2. View
   - `화면`을 담당한다. (사용자에게 어떤 화면을 보여주면 되는지)
3. Controller
   - 요청을 받아 Model과 View 사이에 `다리 역할`을 한다.

- 구분된 역할로 인해 역할(책임)이 명확해지고 유지 보수의 이점이 있다.
- 유연하고 확장성이 좋다.
- 단점으로는 설계 시 많은 시간 및 비용이 소비될 수 있다.

<br />

### 🙄 Javascript CustomEvent(), dispatchEvent()

- CustomEvent: 생성자는 새로운 `CustomEvent`를 생성합니다.
- dispatchEvent: 이벤트 객체를 생성한 다음 `dispatchEvent(event)`를 호출해 요소에 있는 이벤트를 실행시킨다.

```js
// CustomEvent 기본 구문
CustomEvent(typeArg);
CustomEvent(typeArg, options);
```

- 매개변수

  - typeArg: 이벤트의 이름을 나타내는 문자열
  - options(Optional): 다음 속성을 포함하는 객체

- 예제

```js
// CustomEvent 생성
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// 이벤트 발송
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

// 콘솔에 "cat"과 "dog"가 기록됨
```

<br />
