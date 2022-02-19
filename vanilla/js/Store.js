import { TabType } from "./views/TabView.js";
import { createNextId, createPastDate } from "./helpers.js";

const tag = "[store]";

// Model의 역할
export default class Store {
  constructor(storage) {
    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchKeyword = "";
    this.searchResult = [];
    this.selectedTab = TabType.keyword;
  }

  // 검색
  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
    this.addHistory(keyword);
  }

  // 추천 검색어 목록을 storage에서 찾아 반환해주는 메서드
  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (history) => history.keyword !== keyword
    );
  }

  addHistory(keyword) {
    keyword = keyword.trim();

    if (!keyword) return;

    const id = createNextId(this.storage.historyData);
    const date = new Date();

    const hasHistory = this.storage.historyData.some(
      (history) => history.keyword === keyword
    );

    if (hasHistory) {
      this.removeHistory(keyword);
    }

    this.storage.historyData.push({ id, keyword, date });
    this.storage.historyData = this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(a, b) {
    return b.date - a.date;
  }
}
