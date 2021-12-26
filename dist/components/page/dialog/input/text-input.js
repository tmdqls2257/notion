import { BaseComponent } from '../../../component.js';
export class TextSectionInput extends BaseComponent {
    constructor() {
        super(`<div>
    <section class="form__container">
      <label for="title">Title</label>
      <input type="text" class="dialogTitle" />
    </section>
    <section class="form__container">
      <label for="boy">Body</label>
      <textarea type="text" row="3" class="dialogBody"></textarea>
    </section>
  </div>`);
    }
    get title() {
        const element = this.element.querySelector('.dialogTitle');
        return element.value;
    }
    get body() {
        const element = this.element.querySelector('.dialogBody');
        return element.value;
    }
}
