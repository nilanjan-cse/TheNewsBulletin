import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  RouterEvent
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { INews } from '../news/INews';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryResolver implements Resolve<INews[]> {
  searchTerm:string='';
  constructor(private httpClient:HttpClient){}
  resolve(route: ActivatedRouteSnapshot): Observable<INews[]> {
    let query =  route.paramMap.get('q');
    this.searchTerm = query || '';
    return this.httpClient.get<INews[]>(`https://newsapi.org/v2/everything?q=${query}`);
  }
}
