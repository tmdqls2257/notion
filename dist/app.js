import { TextSectionInput } from './components/page/dialog/input/text-input.js';
import { MediaSectionInput } from './components/page/dialog/input/mediaInput.js';
import { InputDialog, } from './components/page/dialog/dialog.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent, } from './components/page/page.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const video = new VideoComponent('vidoe', 'https://www.youtube.com/embed/d7CV2kjTUD4');
        this.page.attachChild(video);
        const note = new NoteComponent('Hello World', 'hi');
        this.page.attachChild(note);
        const todo = new TodoComponent('todoTitle', 'hello');
        this.page.attachChild(todo);
        this.bindElementToDialog('.new-image', MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('.new-video', MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('.new-note', TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog('.new-todo', TextSectionInput, (input) => new TodoComponent(input.title, input.body));
    }
    bindElementToDialog(selector, InputComponet, makeSection) {
        const AddButton = document.querySelector(selector);
        AddButton.addEventListener('click', () => {
            const Dialog = new InputDialog();
            const mediainputSection = new InputComponet();
            Dialog.attachChild(mediainputSection);
            Dialog.attachTo(this.dialogRoot);
            Dialog.setOnAddListener(() => {
                const image = makeSection(mediainputSection);
                this.page.attachChild(image);
                Dialog.removeFrom(this.dialogRoot);
            });
            Dialog.setOnCloseListener(() => {
                Dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);
