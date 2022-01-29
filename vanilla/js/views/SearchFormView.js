import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

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
    this.on("submit", (e) => this.handleSubmit(e));
    on(this.reserElement, "click", () => this.handleReset());
  }

  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);

    if (value.length <= 0) {
      this.handleReset();
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { value } = this.inputElement;
    this.emit("@submit", { value });
  }

  handleReset() {
    console.log(tag, "handleReset");
    this.emit("@reset");
  }
}
