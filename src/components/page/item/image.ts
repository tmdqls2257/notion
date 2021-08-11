import { BaseComponent } from '../../component';

export class ImageComponent extends BaseComponent<HTMLElement>{
  constructor(title:string, url:string){
    super(`<section class="image">
  <div class="image__holder">
    <img class="image__thumnail">
    <p class="image__title"></p>
  </div>
</section>`);
// 직접적으로 변수를 적용할 수 도 있지만 필요한 부분만 업데이트 해주는 것이 좋다.

const imageElement = this.element.querySelector('.image__thumnail')! as HTMLImageElement;
imageElement.src = url;
imageElement.alt = title;

const titleElemnt = this.element.querySelector('.image__title')! as HTMLElement;
titleElemnt.textContent = title;
  }
  
}