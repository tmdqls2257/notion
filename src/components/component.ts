export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void
  removeFrom(parent: HTMLElement): void
}

// 기본적인 틀을 만들어주어 나중에 비디오를 붙이든 이미지를 붙여줍니다.
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T
  constructor(HTMLstring: string) {
    const template = document.createElement('template')

    template.innerHTML = HTMLstring
    this.element = template.content.firstChild! as T
  }

  // 삽입을 하는 것처럼 부모의 자식으로 만들어줍니다.
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element)
  }

  // 부모와의 연결을 끊습니다.
  removeFrom(parent: HTMLElement) {
    parent.removeChild(this.element)
  }
}
