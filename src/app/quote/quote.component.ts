import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Agnes','fly like a butterfly sting like a bee'),
    new Quote(2,'Liz','be yourself'),
    new Quote(3, 'Paul','Get a smile'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
