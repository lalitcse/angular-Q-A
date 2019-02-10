import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window8',
  templateUrl: './window8.component.html',
  styleUrls: ['./window8.component.css']
})
export class Window8Component implements OnInit {
  window8title = 'Windows 8 and 8.1 help and support';

  window8 = {
     data :{
       q1 : "Why does Windows restart without warning?",
       a1 : 'Since the release of Windows XP, Microsoft designed Windows to automatically reboot when errors occur, such as a BSoD. Although this may be nice for errors that do not occur often, users who have a re-occurring error may want to identify the error to troubleshoot it. Below are the steps on how this feature can be disabled and enabled in Windows XP, Vista, 7, 8, and 10.',
       q2 : "Getting into Windows Safe Mode",
       a2 : 'Windows Safe Mode is useful for troubleshooting computer problems, including software and hardware issues. To access Windows Safe Mode, select a link below for the version of Windows you have on your computer.',
       q3 : "How to create a copy of Windows software ?",
       a3 : 'Today, CDs and DVDs are being used far less than they had been previously due to much faster and smaller storage media with bigger capacities (e.g., USB thumb drives). Consequently, many users dont where to use an ISO image file. To learn how to create a USB thumb drive (or DVD) with a copy of Windows on it, choose your version of Windows from the list below and follow the instructions.',
       q4 : "How to create a Windows shortcut",
       a4 : 'Shortcuts are a great way to quickly access programs, files, folders, and even web pages. They can be conveniently placed on your desktop or in certain directories or folders. There are a few methods used to achieve these results. To proceed, make your selection from the list below follow the steps below.'
     }
   }

  constructor() { }

  ngOnInit() {
  }

}
