import storage from "./storage.js";
import { createNextId } from "./helpers.js";

// Model의 역할
class Store {
  constructor(storage) {
    if (!storage) throw "no storage";

    this.storage = storage;
  }

  search(keyword) {
    this.addHistory(keyword);
    return this.storage.productData.filter(
      (product) => keyword && product.name.includes(keyword)
    );
  }

  addHistory(keyword = "") {
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
    this.storage.historyData.push({
      id,
      keyword,
      date,
    });
    this.storage.historyData = this.storage.historyData.sort(this._sortHistory);
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(a, b) {
    return b.date - a.date;
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (history) => history.keyword !== keyword
    );
  }
}

const store = new Store(storage);

export default store;
