import React from "react"; // JSX 문법을 사용하는 코드에서는 React 모듈을 import 해야 함
import ReactDOM from "react-dom";
import App from "./App.js";

console.log("hello");
ReactDOM.render(<App />, document.querySelector("#app"));
/*
   ReactDOM은 <App />컴포넌트를 가지고 가상돔을 만들고, 
   실제 돔에 연결해야 되는데 그 연결되는 실제 돔이 id로 #app을 div부분
*/
