import { BaseComponent } from '../component';

export class PageComponent extends BaseComponent<HTMLUListElement>{
  constructor(){
    super(`<ul class="page">This is page</ul>`);
  }
} 

// 페이지를 만들어 주는 역할