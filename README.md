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
React.createElement("h1", null, "Hello World"); // 6
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
ReactDOM.render(element, document.querySelector("#app")); // 7
```

- 어플리케이션에서는 리액트 엘리먼트를 ReactDOM.render() 함수의 인자로 전달한다.
- `ReactDOM.render()` 함수는 `리액트 앨리먼트`를 받아서 가상돔을 만들기 시작한다.
- 이렇게 만들어진 가상돔은 진짜 돔에 반영되고 그 위치는 두 번째 인자로 전달한 아이디 `app`의 앨리먼트의 자식이다. 이런 과정을 통해 리액트 어플리케이션이 돔에 반영된다.

<br />

### 🙄 Babel

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

- 최신 자바스크립트 문법을 브라우저에서 사용하기 위한 도구로 대부분의 브라우져를 지원할수 있는 코드로 변환한다.
- 리액트 공식문서에는 바벨 따위의 트랜스파일러 없이도 개발할 수 있는 방법을 안내한다.

```
  https://ko.reactjs.org/docs/react-without-es6.html
```

- 하지만 실제 개발 프로젝트를 진행 해보면 이것만으로는 금방 한계를 느낀다. 앞으로 다룰 리액트 컴포넌트는 클래스 문법을 사용하는 것이 보다 편하다.
- 클래스 문법을 포함한 최신 자바스크립트를 사용할 때 바벨이 필요하다. 뿐만 아니라 앞으로 소개할 JSX 문법을 사용할 때에도 바벨이 필요하다.
- 보통은 터미널 명령어를 실행하거나 웹팩같은 번들러로 통합해서 사용한다.

<br />

### 🙄 템플릿 언어

- 엘리먼트를 생성할 때 `document.createElement()` 함수를 사용한다.
- 트리 형태의 돔에 맞게 엘리먼트를 구성하려면 엘리먼트 간의 `부모-자식` 관계를 만들어야 한다.

```js
const h1 = document.createElement("h1"); // 1
const header = document.createElement("header"); // 2
header.appendChild(h1); // 3
```

- 엘리먼트 h1을 만들고`(1)` 이걸 자식으로 갖을 header 엘리먼트도 만든다`(2)`. 그리고 나서 appendChild() 함수를 이용해 h1을 header의 자식 엘리먼트로 만들었다`(3)`.
- 트리 형태의 웹 문서 구조상 이런 코드는 늘어나기 마련이다. 문제는 UI를 나타내는 코드가 읽기 어렵다는 것이다. 코드를 유심히 들여다 봐야만 UI를 가늠할 수 있다.
- 그래서 대안으로 나오는 것이 `템플릿 언어`다. 핸들바, Pug가 대표적이고 앵귤러와 Vue.js도 나름의 템플릿 기능을 지원한다.
- 리액트 자체는 템플릿 언어를 지원하지 않는다. 그야말로 UI만 담당하는 아주 작은 라이브러리이기 때문이다.
- 리액트 엘리먼트를 생성하는 함수인 `createElement()`로 자식 요소를 추가할수는 있지만 썩 쉬운 편은 아니다.

```js
const h1 = React.createElement("h1", null, "Hello world");
const header = React.createElement("header", null, h1);
```

- 개발을 할 수는 있지만 개발해야 UI가 늘어날 수록 불편한 것이 사실이다. 읽기 어려운 코드가 되기 때문이다.
- 리액트에서는 `JSX`라는 자바스크립트 확장 문법을 사용한다.

<br />

### 🙄 JSX(JavaScript XML)

- `JSX(JavaScript XML)`는 자바스크립트의 확장 문법이다. UI 다루는 코드의 가독성을 높이기 위해 고안된 문법이다. createElement() 함수를 직접 사용하는 방식은 읽기 어려운 UI 코드를 만들 수 밖에 없다.
- JSX는 마치 마크업 문법 같다.

```js
<h1>Hello world</h1>
// React.createElement('h1', null, 'Hello world')
```

- JSX를 사용하면 리액트 UI 코드의 모습이 HTML과 닮는다. 돔 구조와 유사하기 때문에 코드로부터 UI을 쉽게 추측할 수 있다.
- JSX로 만든 코드는 `바벨`에 의해 변환되는데 `React.crateElement()` 함수 호출로 대체 된다. `바벨 REPL`에서 직접 JSX 코드가 자바스크립트로 변환되는 모습을 확인해 보자.
- 부모/자식 관계도 HTML과 같다.

```jsx
<header>
  <h1>Hello world</h1>
</header>
```

- 확실히 UI 코드의 가독성이 개선되었다. 이것도 마찬가지로 바벨에 의해 `React.createElement()` 함수 호출로 변환된다.
- 리액트 엘리먼트를 반환하기 때문에 때문에 `ReactDOM.render()`의 인자로 전달될 수 있다.

```jsx
// 1
const element = (
  <header>
    <h1>Hello world</h1>
  </header>
);

// 2
ReactDOM.render(element, document.querySelector("#app"));
```

- JSX는 자바스크립트 표현식이기 때문에 `값`으로 `평가`되고 반환된 리액트 앨리먼트를 element 상수에 할당했다`(1)`.
- 이 엘리먼트를 `ReactDOM.render()`에 전달하면 `가상돔(Virtual Dom)`을 만들고 이걸 `#app` 엘리먼트에 붙여 렌더링되고 우리눈에 hello world란 텍스트를 볼 수 있는 것이다.

<br />

### 🙄 중간 점검

- 리액트 앱을 이루는 최소단위가 `리액트 엘리먼트`인데 이걸 리액트 라이브러리의 `React.createElement()` 함수로 만들수 있다.
- 리액트 엘리먼트를 `가상 돔`으로 만들어 실제 돔에 반영해 주는 것이 바로 `ReactDOM`의 역할이다. 리액트를 사용하려면 반드시 이 두 개의 라이브러리를 사용해야 한다.
- 리액트 코딩을 편하게 하려면 `바벨`같은 트랜스파일러의 도움을 받는 것이 좋다. 클래스, JSX 문법을 사용할 수 있게끔 해주기 때문이다.
- JSX는 `UI 코드의 가독성`을 높여준다. 함수 호출만으로도 리액트 어플리케이션 개발이 가능하지만 약간의 문법을 가미하면 생각보다 UI 개발 환경이 편해진다.

<br />
