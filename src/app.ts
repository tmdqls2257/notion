import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import {PageComponent} from "./components/page/page.js";

class App{
  private readonly page:PageComponent;
  image:ImageComponent;
  video:VideoComponent;
  note:NoteComponent;
  todo:TodoComponent;
  constructor(appRoot:HTMLElement){
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    this.image = new ImageComponent('Image', ``);
    this.image.attachTo(appRoot, 'beforeend');

    this.video = new VideoComponent('vidoe', 'https://www.youtube.com/watch?v=7dhNQsl71yE');
    this.video.attachTo(appRoot, 'beforeend');

    this.note = new NoteComponent('Hello World', 'hi');
    this.note.attachTo(appRoot, 'beforeend');

    this.todo = new TodoComponent('todoTitle', 'hello');
    this.todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);//오류가 나지만 정적으로 확실하게 만들었기 때문에 사용가능