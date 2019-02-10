import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  exceltitle = 'Excel help and support';
  data = [
    {
      q1 : "Q - What is Microsoft Excel?",
      a1 : 'A - Microsoft Excel is an electronic spreadsheet application that enables users to store, organize, calculate and manipulate the data with formulas using a spreadsheet system broken up by rows and columns. It also provides the flexibility to use an external database to do analysis, make reports, etc. thus saving lots of time.'
    },
    {
      q1 : "Q - What is ribbon?",
      a1 : 'A - Ribbon refers to the topmost area of the application that contains menu items and toolbars available in MS-Excel. Ribbon can be shown/hidden using CTRL+F1. The ribbon runs on the top of the application and is the replacement for the toolbars and menus. The ribbons have various tabs on the top, and each tab has its own group of commands.'
    },
    {
      q1 : "Q - How many data formats are available in Excel?",
      a1 : 'A - Eleven data formats are available in Microsoft Excel for data Storage. The ribbon runs on the top of the application and is the replacement for the toolbars and menus. The ribbons have various tabs on the top, and each tab has its own group of commands.'

      
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
