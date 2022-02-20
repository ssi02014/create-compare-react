# 💻 만들고 비교하며 학습하는 리액트

## 📖 ch-1 Vanilla Javascript

- MVC 패턴으로 검색폼 구현하기

<br />

### 📄 lite-server 실행 명령어

```
  npx lite-server --baseDir vanilla
  npx lite-server --baseDir react
```

<br />

### 🙄 MVC란?

```
  Model, View, Controller의 약자. 소프트웨어 디자인 패턴의 하나로, 애플리케이션의 기능을 구분함으로, 정돈된 개발을 가능하게 한다
```

1. Model
   - `데이터` 및 `비즈니스 로직`을 담당한다.
   - 모델은 `데이터만 관리`한다. 어플리케이션 데이터와 화면 출력을 위한 상태를 다룬다.
   - ex) DB와 통신하여 데이터를 조회한다, 데이터를 가공하여 처리한다 등
2. View
   - `화면`을 담당한다. (사용자에게 어떤 화면을 보여주면 되는지)
   - 뷰는 외부에서 데이터가 들어온다고 가정하고 화면을 그린다. 그리고 자신의 역할이 아니라고 판단되면 `커스텀 이벤트`로 외부에 이를 알린다.
3. Controller
   - 요청을 받아 Model과 View 사이에 `다리 역할`을 한다.
   - 모델과 뷰를 사용해 어플리케이션이 돌아가게끔 하는 것이 컨트롤러의 역할이다.
   - `데이터를 변경`하고 이를 `뷰에 반영`해 화면을 렌더링한다.
   - 반대로 뷰에서 사용자 입력이 발생하면 이를 모델에 저장해서 어플리케이션 상태를 관리한다.

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

## 📖 ch-2 React

### 🙄 React
- DOM에 엘리먼트가 있듯이 리액트 앱에도 `엘리먼트(Element)`라는 개념이 있고 이것은 리액트 앱을 구성하는 최소 단위다. 
- 원자가 모여 물질을 이루듯 리액트 엘리먼트 여러개를 모아 리액트 앱을 만든다. 리액트 엘리먼트는 문서를 표현하는 방식이라는 점에서 돔 엘리먼트와 유사하다.

```
  "엘리먼트(Element)"는 리액트 앱을 구성하는 최소 단위다.
```

- React 라이브러리가 제공하는 API 중 엘리먼트를 만들 수 있는 것이 바로 `createElement()` 함수다. 아래 예제에서 "Hello world" 문자열을 담은 h1 엘리먼트를 만들 때 사용했다.

```js
  React.createElement("h1", null, "Hello World") // 6
```

- 콘솔 로그로 반환된 값을 찍어보면 돔 엘리먼트와 달리 `일반 객체`다.

```
{
  type: "h1",
  props: {
    children: "Hello World"
  }
}
```

- `가상돔(Virtual Dom)`은 리액트 어플리케이션과 돔 사이에 위치하는 계층으로써 최소한의 연산으로 화면을 그린다.

<br />

### 🙄 ReactDOM
- 리액트가 만든 가상돔은 `일반 객체`이다. 리액트가 가상돔을 사용하지 않고 돔을 직접 사용했다면 브라우저에서만 사용하는 라이브러리로 제한되었을지 모른다. 하지만 일반 객체 모양을 갖는 가상돔은 이걸 렌더링하는 환경에 따라 여러 곳에서 사용할 수 있다.
- 리액트를 웹 브라우저에서 동작하게 하려면 `가상돔`이 돔 API 호출하도록 하면 될 것이다. 이러한 역할을 하는 것이 `ReactDOM` 라이브러리다. 보통은 웹 개발에서 리액트를 사용한다고 하면 `react + reactDOM`을 사용하는 것이다.

```html
<script
  crossorigin
  src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
></script>
```
- 위 예제가 리액트 다음으로 가져온 라이브러리가 바로 ReactDOM이다.

```js
  ReactDOM.render(element, document.querySelector("#app")) // 7
```
- 어플리케이션에서는 리액트 엘리먼트를 ReactDOM.render() 함수의 인자로 전달한다.
- `ReactDOM.render()` 함수는 `리액트 앨리먼트`를 받아서 가상돔을 만들기 시작한다.
- 이렇게 만들어진 가상돔은 진짜 돔에 반영되고 그 위치는 두 번째 인자로 전달한 아이디 `app`의 앨리먼트의 자식이다. 이런 과정을 통해 리액트 어플리케이션이 돔에 반영된다.

<br />

### 🙄 Babel
```html
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
