import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Agnes','fly like a butterfly sting like a bee',new Date(2018,3,14) ),
    new Quote(2,'Liz','be yourself',new Date(2018,3,14) ),
    new Quote(3, 'Paul','Get a smile',new Date(2018,3,14) ),
  ]


  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm('Are you sure you want to delete ${this.quotes[index].name}')

      if(toDelete){
      this.quotes.splice(index,1);
    }
  }
  
  }


  constructor() { }

  ngOnInit() {}

}
