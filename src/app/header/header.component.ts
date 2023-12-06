import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private backEndService:BackEndService){


  }

  ngOnInit(){
    //onFetch() is called so that posts will load when website is opened.
    this.onFetch();
  }

  onSave(){
    //console.log("Save Clicked")
    this.backEndService.saveData();
  }

  onFetch(){
    //console.log("onFetch() Clicked");
    this.backEndService.fetchData();
  }
}
