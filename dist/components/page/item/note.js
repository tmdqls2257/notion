import { BaseComponent } from "../../component.js";
export class NoteComponent extends BaseComponent {
    constructor(title, message) {
        super(`<section class="note">
    <h1 class="note__title"></h1>
    <p class="note__message"></p>
  </section>`);
        const noteElement = this.element.querySelector('.note__title');
        noteElement.innerHTML = title;
        const titleElemnt = this.element.querySelector('.note__message');
        titleElemnt.innerHTML = message;
    }
}
