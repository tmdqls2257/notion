import { BaseComponent, Component } from '../component.js'

export interface Composable {
  attachChild(child: Component): void
}

// 창을 닫아주는 interface
interface SectionContianer extends Composable, Component {
  setOnCloseListener(listener: onCloseListener): void
  // SectionContianer에 한해서 발생하는 drag 이벤트를 듣습니다.
  setOnDragStateListener(listener: onDragStateListener<SectionContianer>): void
}

//
type setOnCloseConstructor = {
  new (): SectionContianer
}

type onCloseListener = () => void //그냥 닫혔다는 것만 알려주는 함수
// Component를 그냥 extends하면 타입의 정보가 사라지므로 제네릭을 사용
type onDragStateListener<T extends Component> = (
  target: T,
  state: DragState
) => void //드래그가 되었다는 것을 알려주기 위한 함수
type DragState = 'start' | 'stop' | 'enter' | 'leave'

// 전달 받은 이미지나 비디오를 감싸는 컴포넌트를 만들어줍니다.
export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContianer
{
  private close?: onCloseListener //외부로 부터 전달받은 콜백함수
  private dragStateListener?: onDragStateListener<PageItemComponent>

  constructor() {
    // BaseComponen.HTMLstring로 연결하여 html을 만들어줍니다.
    super(`<li draggable='true' class="page-list">
    <section class="page-item"></section>
    <button class="page-item__delete">x</button>
  </li>`)

    // html에 직접적으로 기재하지 않았자만 만들어줄꺼기 때문에 ! as 를 사용합니다.
    const itemDelete = this.element.querySelector(
      '.page-item__delete'
    )! as HTMLButtonElement
    // 버튼을 클릭하면
    itemDelete.onclick = () => {
      this.close && this.close()
    }
    this.element.addEventListener('dragstart', (event: DragEvent) => {
      this.onDragStart(event)
    })
    this.element.addEventListener('dragend', (event: DragEvent) => {
      this.onDragEnd(event)
    })
    this.element.addEventListener('dragenter', (event: DragEvent) => {
      this.onDragEnter(event)
    })
    this.element.addEventListener('dragleave', (event: DragEvent) => {
      this.onDragLeave(event)
    })
  }

  onDragStart(_: DragEvent) {
    // 드래그 상태를 알려주는 기능
    this.notifyDragObservers('start')
  }
  onDragEnd(_: DragEvent) {
    this.notifyDragObservers('stop')
  }
  onDragEnter(_: DragEvent) {
    this.notifyDragObservers('enter')
  }
  onDragLeave(_: DragEvent) {
    this.notifyDragObservers('leave')
  }

  notifyDragObservers(state: DragState) {
    // 드래그가 되었다면 dragStateListener를 호출해주는데 이때의 target은
    // 자기 자신이기 때문에 this를 사용합니다.
    this.dragStateListener && this.dragStateListener(this, state)
  }

  // section 밑에 가져온 아이템들을 붙여줍니다.
  attachChild(child: Component) {
    const sectionElement = this.element.querySelector(
      '.page-item'
    )! as HTMLElement
    child.attachTo(sectionElement)
  }
  setOnCloseListener(listener: onCloseListener) {
    this.close = listener
  }
  // 드래그 이벤트가 발생하면 알려주기 위해 콜백함수 등록
  // PageItemComponent클래스에 있는 onDragStateListener는
  // 어떤 페이지 아이템 컴포넌트인지 또 drag의 상태에 대해서 전달해준다.
  setOnDragStateListener(listener: onDragStateListener<PageItemComponent>) {
    this.dragStateListener = listener
  }
}

// ul을 만들어주는 컴포넌트입니다.
export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor(private pageItemConstructor: setOnCloseConstructor) {
    super(`<ul class="page-ul"></ul>`)
    // 드래그가 되면서 위로 올라왔을 때
    this.element.addEventListener('dragover', (event: DragEvent) => {
      this.onDragOver(event)
    })
    // 드랍되었을 때
    this.element.addEventListener('drop', (event: DragEvent) => {
      this.onDrop(event)
    })
  }
  onDragOver(event: DragEvent) {
    event.preventDefault()
  }
  onDrop(event: DragEvent) {
    event.preventDefault()
  }
  // attachChild함수를 호출하면 새로운 ul을 만들어줍니다.
  attachChild(child: Component) {
    const UlElement = new this.pageItemConstructor()

    UlElement.attachChild(child)
    UlElement.attachTo(this.element, 'beforeend')
    // ul section을 지워주는 함수
    UlElement.setOnCloseListener(() => {
      UlElement.removeFrom(this.element)
    })
    UlElement.setOnDragStateListener(
      (target: SectionContianer, state: DragState) => {
        console.log(target, state)
      }
    )
  }
}
// 페이지를 만들어 주는 역할
