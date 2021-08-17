
export interface Component{
  attachTo(parent:HTMLElement, position?: InsertPosition): void;
  removeFrom(parent:HTMLElement):void;
}

export class BaseComponent<T extends HTMLElement> implements Component{
  protected readonly element:T;
  constructor(HTMLstring:string){
    const template = document.createElement('template');
    template.innerHTML = HTMLstring;
    this.element = template.content.firstChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(position, this.element);
}
removeFrom(parent:HTMLElement){
parent.removeChild(this.element);
}
}