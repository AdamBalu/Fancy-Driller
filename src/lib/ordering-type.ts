export default class OrderingType {
  /** Form element to use */
  el: HTMLFormElement | null;
  /**
   * @param el CSS selector of the form to use
   */
  constructor(el: string) {
    this.el = document.querySelector(el)!;
    this.el?.addEventListener("click", this.clickAction.bind(this));
    this.el?.reset();
  }
  /** Sign in or sign up */
  _accessMode = 0;
  get accessMode() {
    return this._accessMode;
  }
  set accessMode(value) {
    const attr = "data-access";
    const current = this.el?.querySelector(`[${attr}="${this.accessMode}"]`);
    const next = this.el?.querySelector(`[${attr}="${value}"]`);

    if (current) {
      current.ariaSelected = "false";
    }
    if (next) {
      next.ariaSelected = "true";
    }
    this._accessMode = value;
  }
  clickAction(event: Event) {
    const target = event.target as HTMLElement;
    if (target.matches("[data-action='access']")) {
      this.accessMode = Number(target.getAttribute("data-access"));
    }
  }
}
