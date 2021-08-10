import {PageComponent} from "./components/page/page.js";

class App{
  private readonly page:PageComponent;
  constructor(appRoot:HTMLElement){
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector('.document')! as HTMLElement);//오류가 나지만 정적으로 확실하게 만들었기 때문에 사용가능