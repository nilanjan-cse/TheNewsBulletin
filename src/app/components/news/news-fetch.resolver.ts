import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { INews } from './INews';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsFetchResolver implements Resolve<INews[]> {
  apiKey:string = 'b2fec27024cd4efa929d8704c2cbcee2';
  constructor(private httpClient: HttpClient) { }
  resolve(): Observable<INews[]> {
    return this.httpClient.get<INews[]>(`https://newsapi.org/v2/top-headlines?country=in`);
  }
}
