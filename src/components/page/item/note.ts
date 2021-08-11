import { BaseComponent } from "../../component.js";


export class NoteComponent extends BaseComponent<HTMLElement>{
  constructor(title:string, message:string){
    super(`<section class="note">
    <h1 class="note__title"></h1>
    <p class="note__message"></p>
  </section>`);
  
  const noteElement = this.element.querySelector('.note__title')! as HTMLElement;
  noteElement.innerHTML = title;
  const titleElemnt = this.element.querySelector('.note__message')! as HTMLElement;
  titleElemnt.innerHTML = message;
  }
}