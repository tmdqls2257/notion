import { BaseComponent } from '../component.js';
export class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li draggable='true' class="page-list">
    <section class="page-item"></section>
    <button class="page-item__delete">x</button>
  </li>`);
        const itemDelete = this.element.querySelector('.page-item__delete');
        itemDelete.onclick = () => {
            this.close && this.close();
        };
        this.element.addEventListener('dragstart', (event) => {
            this.onDragStart(event);
        });
        this.element.addEventListener('dragend', (event) => {
            this.onDragEnd(event);
        });
        this.element.addEventListener('dragenter', (event) => {
            this.onDragEnter(event);
        });
        this.element.addEventListener('dragleave', (event) => {
            this.onDragLeave(event);
        });
    }
    onDragStart(_) {
        this.notifyDragObservers('start');
    }
    onDragEnd(_) {
        this.notifyDragObservers('stop');
    }
    onDragEnter(_) {
        this.notifyDragObservers('enter');
    }
    onDragLeave(_) {
        this.notifyDragObservers('leave');
    }
    notifyDragObservers(state) {
        this.dragStateListener && this.dragStateListener(this, state);
    }
    attachChild(child) {
        const sectionElement = this.element.querySelector('.page-item');
        child.attachTo(sectionElement);
    }
    setOnCloseListener(listener) {
        this.close = listener;
    }
    setOnDragStateListener(listener) {
        this.dragStateListener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor(pageItemConstructor) {
        super(`<ul class="page-ul"></ul>`);
        this.pageItemConstructor = pageItemConstructor;
        this.element.addEventListener('dragover', (event) => {
            this.onDragOver(event);
        });
        this.element.addEventListener('drop', (event) => {
            this.onDrop(event);
        });
    }
    onDragOver(event) {
        event.preventDefault();
    }
    onDrop(event) {
        event.preventDefault();
    }
    attachChild(child) {
        const UlElement = new this.pageItemConstructor();
        UlElement.attachChild(child);
        UlElement.attachTo(this.element, 'beforeend');
        UlElement.setOnCloseListener(() => {
            UlElement.removeFrom(this.element);
        });
        UlElement.setOnDragStateListener((target, state) => {
            console.log(target, state);
        });
    }
}
