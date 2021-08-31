import { InputDialog } from './components/page/dialog/dialog.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent, PageItemComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image', `https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDFfMjE2%2FMDAxNjA5NDkzODQ1MjY5.FrfFUGkd9HDUGPdUWhf11hnLExfC5b822F_hPkLw-t0g.fbxA1zKVrapQOkHPOBvfAaElptvHCMj_sezSDJgQSbog.JPEG.dltmdals3785%2FIMG_1390.jpg&type=sc960_832`);
        this.page.attachChild(image);
        const video = new VideoComponent('vidoe', 'https://www.youtube.com/embed/d7CV2kjTUD4');
        this.page.attachChild(video);
        const note = new NoteComponent('Hello World', 'hi');
        this.page.attachChild(note);
        const todo = new TodoComponent('todoTitle', 'hello');
        this.page.attachChild(todo);
        const imageAddButton = document.querySelector('.new-image');
        imageAddButton === null || imageAddButton === void 0 ? void 0 : imageAddButton.addEventListener('click', () => {
            const imageDialog = new InputDialog();
            imageDialog.setOnAddListener(() => {
                imageDialog.removeFrom(document.body);
            });
            imageDialog.setOnCloseListener(() => {
                imageDialog.removeFrom(document.body);
            });
            imageDialog.attachTo(document.body);
        });
    }
}
new App(document.querySelector('.document'));
