import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes =  [
    new Quote(1,'Agnes','fly like a butterfly sting like a bee'),
    new Quote(2,'Liz','be yourself'),
    new Quote(3, 'Paul','Get a smile'),
  ]
}