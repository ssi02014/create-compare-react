import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import TabView from "./views/TabView.js";
import KeywordListView from "./views/KeywordListView.js";
import HistoryListView from "./views/HistoryListView.js";

const tag = "[main]";

// DOMContentLoaded 이벤트는 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생
document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new TabView(),
    keywordListView: new KeywordListView(),
    historyListView: new HistoryListView(),
  };

  new Controller(store, views);
}

// lite-server 시작 명령어: npx lite-server --baseDir vanilla
