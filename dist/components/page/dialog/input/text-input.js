import { BaseComponent } from "../../../component";
export class MediaSectionInput extends BaseComponent {
    constructor() {
        super(`<div>
    <section class="dialog">
      <label for="title">Title</label>
      <input type="text" class="dialogTitle">
    </section>
    <section class="dialog">
      <label for="boy">Body</label>
      <textarea type="text" row="3" class="dialogBody">
    </section>
  </div>`);
    }
    get body() {
        const element = this.element.querySelector('.dialogBody');
        return element.value;
    }
    get title() {
        const element = this.element.querySelector('.dialogTitle');
        return element.value;
    }
}
