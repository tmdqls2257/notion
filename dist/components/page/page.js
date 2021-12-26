import { BaseComponent } from '../component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-list">
    <section class="page-item"></section>
    <button class="page-item__delete">x</button>
  </li>`);
        const itemDelete = this.element.querySelector('.page-item__delete');
        itemDelete.onclick = () => {
            this.close && this.close();
        };
    }
    attachChild(child) {
        const sectionElement = this.element.querySelector('.page-item');
        child.attachTo(sectionElement);
    }
    setOnCloseListener(listener) {
        this.close = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConstructor) {
        super(`<ul class="page-ul"></ul>`);
        this.pageItemConstructor = pageItemConstructor;
    }
    attachChild(child) {
        const UlElement = new this.pageItemConstructor();
        UlElement.attachChild(child);
        UlElement.attachTo(this.element, 'beforeend');
        UlElement.setOnCloseListener(() => {
            UlElement.removeFrom(this.element);
        });
    }
}
