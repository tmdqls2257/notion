import { BaseComponent } from '../../../component.js'
import { TextData } from '../dialog.js'

export class TextSectionInput
  extends BaseComponent<HTMLElement>
  implements TextData
{
  constructor() {
    super(`<div>
    <section class="form__container">
      <label for="title">Title</label>
      <input type="text" class="dialogTitle" />
    </section>
    <section class="form__container">
      <label for="boy">Body</label>
      <textarea type="text" row="3" class="dialogBody"></textarea>
    </section>
  </div>`)
  }
  // DOM요소에 있는 URL을 읽어온다.
  // 사용자가 Add버튼을 누르면 컴포넌트에 있는 URL을 읽어올 수 있습니다.
  get title(): string {
    const element = this.element.querySelector(
      '.dialogTitle'
    )! as HTMLInputElement
    return element.value
  }

  get body(): string {
    const element = this.element.querySelector(
      '.dialogBody'
    )! as HTMLInputElement
    return element.value
  }
}
