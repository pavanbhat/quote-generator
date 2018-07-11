import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Quote} from '../models/quote';

@Injectable({
  providedIn: 'root'
})

export class QuoteService {

  private quotesUrl = 'http://localhost:8080/api/quotes';

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesUrl);
  }
}
