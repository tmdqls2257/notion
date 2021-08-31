import { BaseComponent } from "../../component.js";
export class InputDialog extends BaseComponent {
    constructor() {
        super(`<section class="dialog">
    <button class="imageAddButton">Add</button>
    <button class="imageCloseButton">close</button>
    </section>`);
        const imageDelete = this.element.querySelector('.imageCloseButton');
        imageDelete.onclick = () => {
            this.close && this.close();
        };
        const imageAdd = this.element.querySelector('.imageAddButton');
        imageAdd.onclick = () => {
            this.add && this.add();
        };
    }
    setOnCloseListener(listener) {
        this.close = listener;
    }
    setOnAddListener(listener) {
        this.add = listener;
    }
    attachChild(child) {
        const sectionElement = this.element.querySelector('.dialog');
        child.attachTo(sectionElement);
    }
}
