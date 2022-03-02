import store from "./js/Store.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
    };
  }

  handleChangeInput(e) {
    const { value } = e.target;

    if (value.length < 1 && this.state.submitted) {
      return this.handleReset();
    }

    this.setState({
      searchKeyword: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      submitted: true,
      searchResult,
    });
  }

  handleReset(e) {
    this.setState({
      searchKeyword: "",
      submitted: false,
    });
    // this.setState(
    //   () => {
    //     // 여기서 상태 변화
    //     return { searchKeyword: "" };
    //   },
    //   () => {
    //     // 상태 변화 후 호출
    //     console.log(this.state.searchKeyword);
    //   }
    // );
  }

  handleTabs(tabType) {
    this.setState({
      selectedTab: tabType,
    });
  }

  render() {
    const searchForm = (
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
    );

    const searchResult =
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map((item) => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-box">검색 결과가 없습니다.</div>
      );

    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => (
            <li
              key={tabType}
              onClick={() => this.handleTabs(tabType)}
              className={this.state.selectedTab === tabType ? "active" : ""}
            >
              {TabLabel[tabType]}
            </li>
          ))}
        </ul>
        {this.state.selectedTab === TabType.KEYWORD && <div>추천검색어</div>}
        {this.state.selectedTab === TabType.HISTORY && <div>최근검색어</div>}
      </>
    );
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submitted ? searchResult : tabs}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
