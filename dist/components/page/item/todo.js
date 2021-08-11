import { BaseComponent } from "../../component.js";
export class TodoComponent extends BaseComponent {
    constructor(title, todo) {
        super(`<section class="todo">
    <h1 class="todo__title"></h1>
    <input class="todo__checkbox" type="checkbox"></input>
  </section>`);
        const todoElement = this.element.querySelector('.todo__title');
        todoElement.innerHTML = title;
        const titleElemnt = this.element.querySelector('.todo__checkbox');
        titleElemnt.insertAdjacentText('afterend', todo);
    }
}
