export class PageComponent{
  element: HTMLUListElement;
  constructor(){
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.innerHTML = 'hi';
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(position, this.element);//자식 요소 어딘가에 넣는 api
  }

} 

// 페이지를 만들어 주는 역할