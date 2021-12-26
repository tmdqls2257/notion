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

  // 인자의 전달된 컨테이너 요소에 자기 자신을 붙이는 함수
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element)
  }

  // 부모와의 연결을 끊습니다.
  removeFrom(parent: HTMLElement) {
    parent.removeChild(this.element)
  }
}
