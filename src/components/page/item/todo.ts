import { BaseComponent } from "../../component.js";


export class TodoComponent extends BaseComponent<HTMLElement>{
  constructor(title:string, todo:string){
    super(`<section class="todo">
    <h1 class="todo__title"></h1>
    <input class="todo__checkbox" type="checkbox"></input>
  </section>`);
  
  const todoElement = this.element.querySelector('.todo__title')! as HTMLElement;
  todoElement.innerHTML = title
  const titleElemnt = this.element.querySelector('.todo__checkbox')! as HTMLInputElement;
  titleElemnt.insertAdjacentText('afterend', todo);
  }
  }