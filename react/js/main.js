class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form>
            <input type="text" placeholder="검색어를 입력하세요." autoFocus />
            <button type="reset" className="btn-reset"></button>
          </form>
        </div>
        <div className="content">
          <div id="tab-view"></div>
          <div id="keyword-list-view"></div>
          <div id="history-list-view"></div>
          <div id="search-result-view"></div>
        </div>
      </>
    );
  }
}

// const element = (
//   <>
//     <header>
//       <h2 className="container">검색</h2>
//     </header>
//     <div className="container">
//       <form>
//         <input type="text" placeholder="검색어를 입력하세요." autoFocus />
//         <button type="reset" className="btn-reset"></button>
//       </form>
//     </div>
//     <div className="content">
//       <div id="tab-view"></div>
//       <div id="keyword-list-view"></div>
//       <div id="history-list-view"></div>
//       <div id="search-result-view"></div>
//     </div>
//   </>
// );
// ReactDOM.render(element, document.querySelector("#app"));
ReactDOM.render(<App />, document.querySelector("#app"));
