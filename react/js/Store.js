import storage from "./storage.js";

// Model의 역할
class Store {
  constructor(storage) {
    if (!storage) throw "no storage";

    this.storage = storage;
  }

  // 검색
  search(keyword) {
    return this.storage.productData.filter(
      (product) => keyword && product.name.includes(keyword)
    );
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

const store = new Store(storage);

export default store;
