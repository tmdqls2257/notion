export class BaseComponent {
    constructor(HTMLstring) {
        const template = document.createElement('template');
        template.innerHTML = HTMLstring;
        this.element = template.content.firstChild;
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
    removeFrom(parent) {
        parent.removeChild(this.element);
    }
}
