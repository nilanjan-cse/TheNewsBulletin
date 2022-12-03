import { Component, OnInit } from '@angular/core';
import { BreakingNewsService } from 'src/breaking-news.service';
import { INews } from '../news/INews';
import { NewsFetchResolver } from '../news/news-fetch.resolver';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
//import {addDoc,Firestore,collection} from 'firebase/firestore/lite';
import { collection, addDoc } from "firebase/firestore"; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firebaseConfig = {
    apiKey: "AIzaSyBYlVj0kWnZ22Us9erqCZ_itGsjPPjYeyk",
    authDomain: "thenewsbulletin-2b98a.firebaseapp.com",
    projectId: "thenewsbulletin-2b98a",
    storageBucket: "thenewsbulletin-2b98a.appspot.com",
    messagingSenderId: "524022871527",
    appId: "1:524022871527:web:f7d2f4a23aabf8b4e37942",
    measurementId: "G-EFMB1HYDY0"
  };

  subscribeForm : FormGroup ;
  constructor(private newsService : NewsFetchResolver) {
        this.subscribeForm = new FormGroup({
          userEmailInput : new FormControl('',[Validators.email])
        })
  }
    
    
    
    
    
    

  BreakingNews : INews[] =[];
  Data:INews[]=[];
  FirstSlide:any;
  // get random index number ...
  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  // COUNT OF BREAKING NEWS
  Count : number = 0;
  print(){
    console.log(this.Data);
  }
  async subscribeUser(userEmail:string){
    const app = initializeApp(this.firebaseConfig);
    const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, "SubscribedUsers"), {
        email: userEmail,
        timestamp: new Date(Date.now())
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Thank you for subscribing")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  ngOnInit(): void {
    
    this.newsService.resolve().subscribe(d=>{
      this.BreakingNews = JSON.parse(JSON.stringify(d)).articles;
      this.FirstSlide = this.BreakingNews[this.getRandomInt(this.BreakingNews.length)];
      console.log(this.BreakingNews);
      this.Count = this.BreakingNews.length;
      for(let i=0;i<2;i++){
          var temp = this.BreakingNews[this.getRandomInt(this.Count)];
          if(temp.title.toLocaleLowerCase()!=this.FirstSlide.title){
            this.Data.push(temp);
          }
          else{
            temp = this.BreakingNews[this.getRandomInt(this.Count)];
            this.Data.push(temp);
          }
      }

    });

    setTimeout(()=>{
      this.print();
    },2000)
    
    
  }

}
function subscribeUser() {
  throw new Error('Function not implemented.');
}

