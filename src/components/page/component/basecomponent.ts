export interface component{
  attachTo(parent:HTMLElement, position?:InsertPosition):void;
}

export class BaseComponent<T extends HTMLElement>implements component{
  protected readonly element:T;
  constructor(htmlString:string){
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterend') {
    parent.insertAdjacentElement(position, this.element);
}
}