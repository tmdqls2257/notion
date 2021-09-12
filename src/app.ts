import { TextSectionInput } from './components/page/dialog/input/text-input.js';
import { MediaSectionInput } from './components/page/dialog/input/mediaInput.js';
import { InputDialog, MediaData, TextData } from './components/page/dialog/dialog.js';
import { Component } from './components/component.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import {Composable, PageComponent, PageItemComponent} from "./components/page/page.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T; //new라는 아무것도 전달받지 않는 생성자를 가진다.
}
class App{
  private readonly page:Composable & Component;
  constructor(appRoot:HTMLElement, private dialogRoot:HTMLElement){
    
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // const image = new ImageComponent('Image', `https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDFfMjE2%2FMDAxNjA5NDkzODQ1MjY5.FrfFUGkd9HDUGPdUWhf11hnLExfC5b822F_hPkLw-t0g.fbxA1zKVrapQOkHPOBvfAaElptvHCMj_sezSDJgQSbog.JPEG.dltmdals3785%2FIMG_1390.jpg&type=sc960_832`);
    // this.page.attachChild(image);

    const video = new VideoComponent('vidoe', 'https://www.youtube.com/embed/d7CV2kjTUD4');
    this.page.attachChild(video);

    const note = new NoteComponent('Hello World', 'hi');
    this.page.attachChild(note);

    const todo = new TodoComponent('todoTitle', 'hello');
    this.page.attachChild(todo);

    
    this.bindElementToDialog<MediaSectionInput>(
    '.new-image',
    MediaSectionInput,
    (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );//Add버튼이 클릭되면 input요소를 전달받아서 그 input에 있는 데이터를 이용해
    // ImageComponent를 만드는 콜백 함수를 전달한다.

    this.bindElementToDialog<MediaSectionInput>(
      '.new-video',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
      );

    this.bindElementToDialog<TextSectionInput>(
      '.new-note',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
      );

      this.bindElementToDialog<TextSectionInput>(
        '.new-todo',
        TextSectionInput,
        (input: TextSectionInput) => new TodoComponent(input.title, input.body)
        );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector:string,
    InputComponet: InputComponentConstructor<T>,
    makeSection: (input: T) => Component, //Input을 인자로 받아서 컴포넌트를 만드는 함수
    ){
    const AddButton = document.querySelector(selector)! as HTMLButtonElement;
    AddButton.addEventListener('click', () => {
      const Dialog = new InputDialog();
      const mediainputSection = new InputComponet(); //constructor를 외부에서 받아온다.
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

new App(document.querySelector('.document')! as HTMLElement, document.body);//오류가 나지만 정적으로 확실하게 만들었기 때문에 사용가능
// 동적으로 추가해주기 위해 document.body를 전달받아 사용합니다.