import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../../services/quote.service';
import {Quote} from '../../models/quote';

@Component({
  selector: 'app-qoute-component',
  templateUrl: './qoute-component.component.html',
  styleUrls: ['./qoute-component.component.css']
})
export class QouteComponentComponent implements OnInit {

  _quotes: Quote[] = [];
  _index = 0;
  _quote = '';

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuotes();
  }

  public getQuotes(): void {
      this.quoteService.getQuotes().subscribe(quotes => this._quotes = quotes);
  }

  public getRandomQuote(): void {
    this._index = Math.floor((Math.random() * this._quotes.length) + 1);
    this._quote = this._quotes[this._index].value.quote;
  }

}
