import { formatRelativeDate } from "./js/helpers.js";
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
      keywordList: [],
      historyList: [],
    };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    const historyList = store.getHistoryList();
    this.setState({ keywordList, historyList });
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
    const historyList = store.getHistoryList();

    this.setState({
      submitted: true,
      searchKeyword,
      searchResult,
      historyList,
    });
  }

  handleReset(e) {
    this.setState({
      searchKeyword: "",
      submitted: false,
    });
  }

  handleTabs(tabType) {
    this.setState({
      selectedTab: tabType,
    });
  }

  handleRemoveHistory(e, keyword) {
    e.stopPropagation();

    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    this.setState({ historyList });
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

    const keywordList = (
      <ul className="list">
        {this.state.keywordList.map((item, idx) => (
          <li key={item.id} onClick={() => this.search(item.keyword)}>
            <span className="number">{idx + 1}</span>
            <span>{item.keyword}</span>
          </li>
        ))}
      </ul>
    );

    const historyList = (
      <ul className="list">
        {this.state.historyList.map((item) => (
          <li key={item.id} onClick={() => this.search(item.keyword)}>
            <span>{item.keyword}</span>
            <span className="date">{formatRelativeDate(item.date)}</span>
            <button
              className="btn-remove"
              onClick={(event) => this.handleRemoveHistory(event, item.keyword)}
            ></button>
          </li>
        ))}
      </ul>
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
        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HISTORY && historyList}
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
