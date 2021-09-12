
import { Composable } from './../page.js';
import { BaseComponent, Component } from "../../component.js";
type onCloseLisenter = () => void;
type onAddLisenter = () => void;

export interface MediaData { //MediaSectionInput와 textSectionInput이 커플링되는 것을 막아주기 위해
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly body: string;
}

export class InputDialog extends BaseComponent<HTMLElement> implements Composable{
  private close ?: onCloseLisenter;
  private add ?: onAddLisenter;
  constructor(){
    super(`<section class="dialog">
    <div id='dialog__body'><div>
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
    const sectionElement = this.element.querySelector('#dialog__body')! as HTMLElement;
  child.attachTo(sectionElement);
  
  }
}