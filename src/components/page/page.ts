
import { BaseComponent, Component } from "../component.js";

export interface Composable{
  attachChild(child:Component):void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable{

  constructor(){
    super(`<li class="page-list">
    <section class="page-item"></section>
    <button class="page-item__delete">x</button>
  </li>`);

}
attachChild(child:Component){
  const sectionElement = this.element.querySelector('.page-item')! as HTMLElement;
  child.attachTo(sectionElement);
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{
  constructor(){
    super(`<ul class="page-ul"></ul>`);
  }
  attachChild(child:Component){
    const UlElement = new PageItemComponent();
    UlElement.attachChild(child);
    UlElement.attachTo(this.element, 'beforeend');

  }
} 

// 페이지를 만들어 주는 역할