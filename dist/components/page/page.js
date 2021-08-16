import { BaseComponent } from "../component.js";
class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-list">
    <section class="page-item"></section>
    <button class="page-item__delete">x</button>
  </li>`);
    }
    attachChild(child) {
        const sectionElement = this.element.querySelector('.page-item');
        child.attachTo(sectionElement);
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super(`<ul class="page-ul"></ul>`);
    }
    attachChild(child) {
        const UlElement = new PageItemComponent();
        UlElement.attachChild(child);
        UlElement.attachTo(this.element, 'beforeend');
    }
}
