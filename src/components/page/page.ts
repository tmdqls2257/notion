
import { BaseComponent } from "./component/basecomponent";


export class PageComponent extends BaseComponent<HTMLUListElement>{
  constructor(){
    super(`<ul class="page">This is Page</ul>`);

  }
} 

// 페이지를 만들어 주는 역할