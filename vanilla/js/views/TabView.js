import { on, qs, qsAll } from "../helpers.js";
import View from "./View.js";

export const TabType = {
  keyword: "KEYWORD",
  history: "HISTORY",
};

const TabLabel = {
  [TabType.keyword]: "추천 검색어",
  [TabType.history]: "최근 검색어",
};

export default class TabView extends View {
  constructor() {
    super(qs("#tab-view"));
    this.template = new Template();
  }

  show(selectedTab = "KEYWORD") {
    this.element.innerHTML = this.template.getTabList();

    qsAll("li", this.element).forEach((el) => {
      el.className = el.dataset.tab === selectedTab ? "active" : "";
    });
    super.show();
  }
}

class Template {
  getTabList() {
    return `
      <ul class="tabs">
        ${Object.values(TabType)
          .map((tapType) => ({
            tapType,
            tabLabel: TabLabel[tapType],
          }))
          .map(this.getTab)
          .join("")}
      </ul>
    `;
  }

  getTab({ tapType, tabLabel }) {
    return `
      <li data-tab="${tapType}">
        ${tabLabel}
      </li>
    `;
  }
}
