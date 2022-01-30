import { qs } from "../helpers";
import View from "./View";

export default class SearchResultView extends View {
  constructor() {
    super(qs("search-result-view"));

    this.template = new Template();
  }

  // 오버라이드
  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.template.getList(data)
        : this.template.getEmptyMessage();
    super.show();
  }
}

class Template {
  getList(data = []) {
    return `
      <ul class="result">
        ${data.map(this.getItem).join("")}
      </ul>
    `;
  }

  getEmptyMessage() {
    return `
      <div class="empty-box">검색결과가 없습니다.</div>
    `;
  }
  getItem({ imageUrl, name }) {
    return `
      <li>
        <img src="${imageUrl}" alt="${name}" />
        <p>${name}</p>
      </li>
    `;
  }
}
