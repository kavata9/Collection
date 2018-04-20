import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  quotes :string[];

  constructor (){
    
    this.quotes =["Fly like a butterfly sting like a bee","am out of here","dancing in the rain"];
  }
}
