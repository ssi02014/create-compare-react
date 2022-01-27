const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.searchFormView.on("@submit", (e) => this.search(e.detail.value));
  }

  search(keyword) {
    console.log(keyword);
  }
}
