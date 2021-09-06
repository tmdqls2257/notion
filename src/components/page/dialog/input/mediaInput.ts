import { BaseComponent } from "../../../component.js";
export class MediaSectionInput extends BaseComponent<HTMLElement>{
  constructor(){
    super(`<div>
    <section class="form__container">
      <label for="title">Title</label>
      <input type="text" id="dialogTitle">
    </section>
    <section class="form__container">
      <label for="url">Url</label>
      <input type="text" id="dialogUrl">
    </section>
  </div>`);
  }
// DOM요소에 있는 URL을 읽어온다.
// 사용자가 Add버튼을 누르면 컴포넌트에 있는 URL을 읽어올 수 있습니다.
  get url(): string{
    const element = this.element.querySelector('#dialogUrl')! as HTMLInputElement;
    return element.value;
  }
  get title(): string{
    const element = this.element.querySelector('#dialogTitle')! as HTMLInputElement;
    return element.value;
  }
}
