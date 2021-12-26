import { BaseComponent } from '../../component.js'

//
export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
    <div class="image__holder">
      <img class="image__thumnail">
      <p class="image__title"></p>
    </div>
  </section>`)

    const imageElement = this.element.querySelector(
      '.image__thumnail'
    )! as HTMLImageElement
    // HTMLImageElement로 설정해줬기 때문에 이미지의 속성을 이용할 수 있다.
    imageElement.src = url
    imageElement.alt = title

    const titleElemnt = this.element.querySelector(
      '.image__title'
    )! as HTMLElement
    // HTMLElement로 설정해주었기 때문에 innerText를 사용할 수 있습니다.
    titleElemnt.innerText = title
  }
}
