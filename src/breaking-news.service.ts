import { Injectable } from '@angular/core';
import { INews } from './app/components/news/INews';
import { NewsFetchResolver } from './app/components/news/news-fetch.resolver';

@Injectable({
  providedIn: 'root'
})
export class BreakingNewsService {
  BreakingNews : INews[] = [];
  constructor(private newsService : NewsFetchResolver) { }

  getBreakingNews(){
    this.newsService.resolve().subscribe(d=>{
      this.BreakingNews = JSON.parse(JSON.stringify(d)).articles;
    })
    return this.BreakingNews;
  }
}
