import { MediaSectionInput } from './components/page/dialog/input/mediaInput.js';
import { InputDialog } from './components/page/dialog/dialog.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from "./components/page/page.js";
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const video = new VideoComponent('vidoe', 'https://www.youtube.com/embed/d7CV2kjTUD4');
        this.page.attachChild(video);
        const note = new NoteComponent('Hello World', 'hi');
        this.page.attachChild(note);
        const todo = new TodoComponent('todoTitle', 'hello');
        this.page.attachChild(todo);
        const imageAddButton = document.querySelector('.new-image');
        imageAddButton === null || imageAddButton === void 0 ? void 0 : imageAddButton.addEventListener('click', () => {
            const Dialog = new InputDialog();
            const mediainputSection = new MediaSectionInput();
            Dialog.attachChild(mediainputSection);
            Dialog.attachTo(dialogRoot);
            Dialog.setOnAddListener(() => {
                const image = new ImageComponent(mediainputSection.title, mediainputSection.url);
                if (mediainputSection.url !== '')
                    this.page.attachChild(image);
                Dialog.removeFrom(dialogRoot);
            });
            Dialog.setOnCloseListener(() => {
                Dialog.removeFrom(dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);
