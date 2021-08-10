export class ImageComponent{
  private image: HTMLElement;
  constructor(title:string, url:string){
    const template = document.createElement('template');
    template.innerHTML= `<section class="image">
  <div class="image__holder">
    <img class="image__thumnail">
    <p class="image__title"></p>
  </div>
</section>`;
this.image = template.content.firstElementChild! as HTMLElement;

const imageElement = this.image.querySelector('.image__thumnail')! as HTMLImageElement;
imageElement.src = url;
imageElement.alt = title;

const titleElemnt = this.image.querySelector('.image__title')! as HTMLElement;
titleElemnt.textContent = title;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.image);
}
}