export default class OrderingType {
  /** Form element to use */
  el: HTMLFormElement | null;
  /** Callback to update React state */
  updateStateCallback: (value: boolean) => void;

  /**
   * @param el CSS selector of the form to use
   * @param updateStateCallback Callback function to update state
   */
  constructor(el: string, updateStateCallback: (value: boolean) => void) {
    this.el = document.querySelector(el)!;
    this.updateStateCallback = updateStateCallback;
    this.el?.addEventListener("click", this.clickAction.bind(this));
    this.el?.reset();
  }

  _accessMode = false;
  get accessMode() {
    return this._accessMode;
  }
  set accessMode(value) {
    const attr = "data-access";
    const current = this.el?.querySelector(
      `[${attr}="${Number(this.accessMode)}"]`,
    );
    const next = this.el?.querySelector(`[${attr}="${Number(value)}"]`);

    if (current) {
      current.ariaSelected = "false";
    }
    if (next) {
      next.ariaSelected = "true";
    }
    this._accessMode = value;
    this.updateStateCallback(value);
  }
  clickAction(event: Event) {
    const target = event.target as HTMLElement;
    if (target.matches("[data-action='access']")) {
      this.accessMode = Boolean(Number(target.getAttribute("data-access")));
    }
  }
}
