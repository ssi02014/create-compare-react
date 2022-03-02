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
}

const store = new Store(storage);

export default store;
