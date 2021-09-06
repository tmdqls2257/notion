import { BaseComponent } from "../../../component.js";
export class MediaSectionInput extends BaseComponent {
    constructor() {
        super(`<div>
    <section class="form__container">
      <label for="title">Title</label>
      <input type="text" id="dialogTitle">
    </section>
    <section class="form__container">
      <label for="url">Url</label>
      <input type="text" id="dialogUrl">
    </section>
  </div>`);
    }
    get url() {
        const element = this.element.querySelector('#dialogUrl');
        return element.value;
    }
    get title() {
        const element = this.element.querySelector('#dialogTitle');
        return element.value;
    }
}
