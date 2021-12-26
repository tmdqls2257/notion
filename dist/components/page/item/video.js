import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    convertToEmbeddedURL(url) {
        const replaceUrl = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(replaceUrl);
        const videoID = match ? match[1] || match[2] : null;
        console.log(match);
        console.log(videoID);
        if (videoID) {
            return `https://www.youtube.com/embed/${videoID}`;
        }
        return url;
    }
    constructor(title, url) {
        super(`<section class="video__thumnail">
    <div class="video__player">
      <iframe src="" class="video__iframe"></iframe>
      <h3 class="video__title"></h3>
    </div>
  </section>`);
        const videoElement = this.element.querySelector('.video__iframe');
        videoElement.src = this.convertToEmbeddedURL(url);
        const titleElemnt = this.element.querySelector('.video__title');
        titleElemnt.textContent = title;
    }
}
