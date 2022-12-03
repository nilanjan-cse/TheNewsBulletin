import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchForm : FormGroup ;
  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      searchInputField : new FormControl([''])
    })
   }
   searchQuery(query:string){
      this.router.navigate([`search/${query}`]);
   }
  ngOnInit(): void {
  }

}
