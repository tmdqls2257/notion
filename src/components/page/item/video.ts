import { BaseComponent } from '../../component.js'

export class VideoComponent extends BaseComponent<HTMLElement> {
  // 정규표현식(Regex)
  private convertToEmbeddedURL(url: string): string {
    // const replaceUrl = /^.*(youtu.be\/|v\/|u\/\w\/|watch\?v=|&v=embed\/|embed\/)([^#&?]*).*/;

    const replaceUrl =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/

    // url이 유효한지 검사합니다.
    // 일치시킬 수 있는 문자열 또는 개체를 일치시키고 해당 검색 결과를
    // 포함하는 배열을 반환하거나 일치하는 항목이 없으면 null을 반환합니다.\
    const match = url.match(replaceUrl)
    const videoID = match ? match[1] || match[2] : null
    console.log(match)

    console.log(videoID)
    if (videoID) {
      return `https://www.youtube.com/embed/${videoID}`
    }
    return url
  }

  constructor(title: string, url: string) {
    super(`<section class="video__thumnail">
    <div class="video__player">
      <iframe src="" class="video__iframe"></iframe>
      <h3 class="video__title"></h3>
    </div>
  </section>`)

    const videoElement = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement
    videoElement.src = this.convertToEmbeddedURL(url)
    const titleElemnt = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadElement
    titleElemnt.textContent = title
  }
}
// <iframe width="1122" height="631" src="https://www.youtube.com/embed/d7CV2kjTUD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
