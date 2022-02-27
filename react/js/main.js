class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(e) {
    this.setState({
      searchKeyword: e.target.value,
    });
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form>
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={this.state.searchKeyword}
              onChange={(e) => this.handleChangeInput(e)}
              autoFocus
            />
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

ReactDOM.render(<App />, document.querySelector("#app"));

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