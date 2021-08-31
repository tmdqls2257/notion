
import { Composable } from './../page.js';
import { BaseComponent, Component } from "../../component.js";
type onCloseLisenter = () => void;
type onAddLisenter = () => void;
export class InputDialog extends BaseComponent<HTMLElement> implements Composable{
  private close ?: onCloseLisenter;
  private add ?: onAddLisenter;
  constructor(){
    super(`<section class="dialog">
    <button class="imageAddButton">Add</button>
    <button class="imageCloseButton">close</button>
    </section>`);
    
    const imageDelete = this.element.querySelector('.imageCloseButton')! as HTMLButtonElement;

    imageDelete.onclick = () =>{
      this.close && this.close();
    }

    const imageAdd = this.element.querySelector('.imageAddButton')! as HTMLButtonElement;
    imageAdd.onclick = () => {
      this.add && this.add();
    }

  }
  setOnCloseListener(listener: onCloseLisenter){
    this.close = listener;
  }
  setOnAddListener(listener: onAddLisenter){
    this.add = listener;
  }
  attachChild(child:Component){
    const sectionElement = this.element.querySelector('.dialog')! as HTMLElement;
  child.attachTo(sectionElement);
  
  }
}