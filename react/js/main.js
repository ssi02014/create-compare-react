class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
    };
  }

  handleChangeInput(e) {
    const { value } = e.target;

    if (value.length < 1) {
      return this.handleReset();
    }

    this.setState({
      searchKeyword: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  handleReset(e) {
    // this.setState({
    //   searchKeyword: "",
    // });

    this.setState(
      () => {
        // 여기서 상태 변화
        return { searchKeyword: "" };
      },
      () => {
        // 상태 변화 후 호출
        console.log(this.state.searchKeyword);
      }
    );
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form
            onSubmit={(e) => this.handleSubmit(e)}
            onReset={(e) => this.handleReset(e)}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={this.state.searchKeyword}
              onChange={(e) => this.handleChangeInput(e)}
              autoFocus
            />
            {this.state.searchKeyword.length > 0 && (
              <button type="reset" className="btn-reset"></button>
            )}
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
