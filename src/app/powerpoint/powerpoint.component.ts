import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powerpoint',
  templateUrl: './powerpoint.component.html',
  styleUrls: ['./powerpoint.component.css']
})
export class PowerpointComponent implements OnInit {
powertitle = 'Power point help and support';

  data = [
    {
      q1 : "Q - What is Window 7 ?",
      a1 : 'A - Code-named Vienna and Blackcomb, Windows 7 is an operating system and the successor to Windows Vista. It was officially released by Microsoft to the public on October 22, 2009. Below is an image of the Windows 7 desktop.'
    },
    {
      q1 : "Q - How to restart Microsoft Windows ?",
      a1 : 'A - Restarting your computer is necessary for many common tasks, including installing new software and performing Windows Updates. This page contains multiple methods for restarting Windows. To proceed, select the method you would like to use from the list below or read through each section individually.'
    },
    {
      q1 : "Q - How to determine the version of Windows on a computer ?",
      a1 : 'A - All users who are using Microsoft Windows can find what version of Windows theyre using by following the steps below Tip See our Windows definition for information about Microsoft Windows including all versions of Windows and the history of Windows.'
    }
  ]

 
  constructor() { }

  ngOnInit() {
  }

}
