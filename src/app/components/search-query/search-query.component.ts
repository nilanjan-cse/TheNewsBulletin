import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from '../news/INews';
import { SearchQueryResolver } from './search-query.resolver';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  query:string='';
  constructor(private activatedRoute:ActivatedRoute, private queryResolver : SearchQueryResolver) {
    this.query = this.queryResolver.searchTerm;
   }
  Headlines:INews[] = [];
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  defaultImage:string = "assets/5_(39).jpg";
  UTCDate(date:string){
    var timeInMinutes = Math.round((new Date(Date.now()).getTime()-new Date(date).getTime())/60000);
    var output='';
    if(timeInMinutes>=60){
      output = Math.round((new Date(Date.now()).getTime()-new Date(date).getTime())/3600000) + " Hours ago";
    }
    else {
      output = timeInMinutes + " Minutes ago";
    }
    return output;
    
  }
  ngOnInit(): void {
    this.Headlines = this.activatedRoute.snapshot.data['result'].articles;
    
    console.log(this.Headlines);  
  } 

}
