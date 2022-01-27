import { on, qs } from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {
  constructor() {
    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.reserElement = qs("[type=reset]", this.element);
    this.showResetButton(false);
    this.bindEvent();
  }

  showResetButton(visible = true) {
    this.reserElement.style.display = visible ? "block" : "none";
  }

  bindEvent() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    on(this.element, "submit", (e) => this.handleSubmit(e));
  }

  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("[SearchFormView]", "handleSubmit");
    const { value } = this.inputElement;
    this.emit("@submit", { value });
  }
}
