import { BaseComponent } from "../../component.js";


export class VideoComponent extends BaseComponent<HTMLElement>{
  constructor(title:string, url:string){
    super(`<section class="video">
    <video src=""  class="video__thumnail"></video>
    <p class="video__title"></p>
  </section>`);

  const videoElement = this.element.querySelector('.video__thumnail')! as HTMLVideoElement;
  videoElement.src = url;
  const titleElemnt = this.element.querySelector('.video__title')! as HTMLElement;
  titleElemnt.textContent = title;
  }
}