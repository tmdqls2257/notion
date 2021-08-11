import { BaseComponent } from "../../component.js";
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
    <video src=""  class="video__thumnail"></video>
    <p class="video__title"></p>
  </section>`);
        const videoElement = this.element.querySelector('.video__thumnail');
        videoElement.src = url;
        const titleElemnt = this.element.querySelector('.video__title');
        titleElemnt.textContent = title;
    }
}
