import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  
topnav = {
  header :{
    main : "Frequently Asked Questions",
    model : 'Frequently Asked Questions for your app and product',
  }
}
  
  constructor() { }

  ngOnInit() {
  }

}
