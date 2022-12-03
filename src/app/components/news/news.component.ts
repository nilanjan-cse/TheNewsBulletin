import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from './INews';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private activatedRoute:ActivatedRoute) { }
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
    this.Headlines = this.activatedRoute.snapshot.data['headlines'].articles;
    
    console.log(this.Headlines);  
  } 

}
