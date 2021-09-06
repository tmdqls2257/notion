import { BaseComponent } from "../../../component";
export class MediaSectionInput extends BaseComponent<HTMLElement>{
  constructor(){
    super(`<div>
    <section class="dialog">
      <label for="title">Title</label>
      <input type="text" class="dialogTitle">
    </section>
    <section class="dialog">
      <label for="boy">Body</label>
      <textarea type="text" row="3" class="dialogBody">
    </section>
  </div>`);
  }
// DOM요소에 있는 URL을 읽어온다.
// 사용자가 Add버튼을 누르면 컴포넌트에 있는 URL을 읽어올 수 있습니다.
  get body(): string{
    const element = this.element.querySelector('.dialogBody')! as HTMLInputElement;
    return element.value;
  }
  get title(): string{
    const element = this.element.querySelector('.dialogTitle')! as HTMLInputElement;
    return element.value;
  }
}