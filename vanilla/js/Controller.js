import { TabType } from "./views/TabView.js";

export default class Controller {
  constructor(
    store,
    { searchFormView, searchResultView, tabView, keywordListView }
  ) {
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;
    this.keywordListView = keywordListView;

    this.searchKeyword = "";

    this.subscribeViewEvents();
    this.render();
  }

  // 커스텀 이벤트 구독
  subscribeViewEvents() {
    // 검색폼
    this.searchFormView
      .on("@submit", (e) => this.search(e.detail.value))
      .on("@reset", () => this.reset());

    // 탭
    this.tabView.on("@change", (e) => this.changeTab(e.detail.value));

    // 키워드
    this.keywordListView.on("@click", (e) => this.search(e.detail.value));
  }

  changeTab(tab) {
    this.store.selectedTab = tab;
    this.render();
  }

  // 검색
  search(searchKeyword) {
    this.store.search(searchKeyword);
    this.render();
  }

  reset() {
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  // 화면에 그리는 메서드
  render() {
    if (this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }

    this.tabView.show(this.store.selectedTab);

    if (this.store.selectedTab === TabType.keyword) {
      this.keywordListView.show(this.store.getKeywordList());
    } else if (this.store.selectedTab === TabType.history) {
      this.keywordListView.hide();
    } else {
      throw "사용할 수 없는 탭입니다.";
    }

    this.searchResultView.hide();
  }

  renderSearchResult() {
    //Todo
    this.searchFormView.show(this.store.searchKeyword);

    this.tabView.hide();
    this.keywordListView.hide();

    this.searchResultView.show(this.store.searchResult);
  }
}
