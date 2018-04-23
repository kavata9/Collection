import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Moral indignation is jealousy with a halo',' H. G. Wells ','Agnes',new Date(2018,0,18) ),
    new Quote('You got to be careful if you dont know where youre going because you might not get there','Liz','Tush',new Date(2018,0,18))
    // new Quote( 'Get a smile','Paul','liz')
    
  ]


  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
        this.quotes.splice(index, 1);
        }
        }

  addNewQuote(quote) {
    this.quotes.push(quote);
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
