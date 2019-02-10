import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window7',
  templateUrl: './window7.component.html',
  styleUrls: ['./window7.component.css']
})
export class Window7Component implements OnInit {
  window7title = 'Windows 7 help and support';

 window7 = {
    data :{
      q1 : "What is Window 7 ?",
      a1 : 'Code-named Vienna and Blackcomb, Windows 7 is an operating system and the successor to Windows Vista. It was officially released by Microsoft to the public on October 22, 2009. Below is an image of the Windows 7 desktop.',
      q2 : "How to restart Microsoft Windows ?",
      a2 : 'Restarting your computer is necessary for many common tasks, including installing new software and performing Windows Updates. This page contains multiple methods for restarting Windows. To proceed, select the method you would like to use from the list below or read through each section individually.',
      q3 : "How to determine the version of Windows on a computer ?",
      a3 : 'All users who are using Microsoft Windows can find what version of Windows theyre using by following the steps below Tip See our Windows definition for information about Microsoft Windows including all versions of Windows and the history of Windows.'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
