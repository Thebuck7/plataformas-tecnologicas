import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plataformas-tecnologicas';

  content: number = 0;
  
  changeContent(numb: number) {
    this.content = numb;
    return this.content;
  }

  scroll(el:HTMLElement){
    el.scrollIntoView()
  }

}
