import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'fly like a butterfly sting like a bee','Agnes',new Date(2018,3,22) ),
    new Quote(2,'be yourself','Liz',new Date(2018,8,14) ),
    new Quote(3, 'Get a smile','Paul',new Date(2018,12,24) ),
  ]


  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm('Are you sure you want to delete ${this.quotes[index].name}')

      if(toDelete){
      this.quotes.splice(index,1)
    }
  }
  
  }


  constructor() { }

  ngOnInit() {}

}
