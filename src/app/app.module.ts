import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsFetchResolver } from './components/news/news-fetch.resolver';
import { NewsComponent } from './components/news/news.component';
import { NavComponent } from './nav/nav.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { XapiInterceptor } from './components/news/xapi.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchQueryComponent } from './components/search-query/search-query.component';
import { SearchQueryResolver } from './components/search-query/search-query.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NavComponent,
    SearchQueryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
        resolve: { headlines: NewsFetchResolver },
      },
      {
        path: 'search/:q',
        component: SearchQueryComponent,
        resolve: { result: SearchQueryResolver },
      },
    ]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XapiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
