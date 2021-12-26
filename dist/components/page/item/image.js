import { BaseComponent } from '../../component.js';
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="image">
    <div class="image__holder">
      <img class="image__thumnail">
      <p class="image__title"></p>
    </div>
  </section>`);
        const imageElement = this.element.querySelector('.image__thumnail');
        imageElement.src = url;
        imageElement.alt = title;
        const titleElemnt = this.element.querySelector('.image__title');
        titleElemnt.innerText = title;
    }
}
