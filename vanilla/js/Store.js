import { TabType } from "./views/TabView.js";

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

  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }

  // 추천 검색어 목록을 storage에서 찾아 반환해주는 메서드
  getKeywordList() {
    return this.storage.keywordData;
  }
}
