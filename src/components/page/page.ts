import { BaseComponent, Component } from "../component.js";

export interface Composable{
  attachChild(child:Component):void;
}

interface setOnCloseContianer extends Composable, Component{
  setOnCloseListener(listener: onCloseLisnter):void;
}

type setOnCloseConstructor = {
  new (): setOnCloseContianer;
}

type onCloseLisnter = () => void;//그냥 닫혔다는 것만 알려주는 함수
export class PageItemComponent extends BaseComponent<HTMLElement> implements setOnCloseContianer{
  private close ?: onCloseLisnter; //외부로 부터 전달받은 콜백함수를
  constructor(){
    super(`<li class="page-list">
    <section class="page-item"></section>
    <button class="page-item__delete">x</button>
  </li>`);
  
  const itemDelete = this.element.querySelector('.page-item__delete')! as HTMLButtonElement;
  itemDelete.onclick = () =>{
    this.close && this.close();
  }
}
attachChild(child:Component){
  const sectionElement = this.element.querySelector('.page-item')! as HTMLElement;
  child.attachTo(sectionElement);
}
setOnCloseListener(listener: onCloseLisnter){
  this.close = listener;
}
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{
  constructor(private pageItemConstructor:setOnCloseConstructor){
    super(`<ul class="page-ul"></ul>`);
  }
  attachChild(child:Component){
    const UlElement = new this.pageItemConstructor();
    UlElement.attachChild(child);
    UlElement.attachTo(this.element, 'beforeend');
    UlElement.setOnCloseListener(() => {
      UlElement.removeFrom(this.element);
    });
} 
}
// 페이지를 만들어 주는 역할