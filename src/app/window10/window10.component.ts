import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window10',
  templateUrl: './window10.component.html',
  styleUrls: ['./window10.component.css']
})
export class Window10Component implements OnInit {

  window10title = 'Windows 10 help and support';

  window10 = {
     data :{
       q1 : "When will Windows 10 be available?",
       a1 : 'Since the release of Windows XP, Microsoft designed Windows to automatically reboot when errors occur, such as a BSoD. Although this may be nice for errors that do not occur often, users who have a re-occurring error may want to identify the error to troubleshoot it. Below are the steps on how this feature can be disabled and enabled in Windows XP, Vista, 7, 8, and 10.',
       q2 : "What does it mean to reserve a free upgrade to Windows 10 ?",
       a2 : 'We are offering a free upgrade to Windows 10 for eligible Windows 7 SP1, Windows 8.1 Update, and Windows Phone 8.1 devices, for a limited time. Take advantage of this free offer and be one of the first to enjoy Windows 10 when it releases. Reserve your free upgrade in the Get Windows 10 App today.',
       q3 : "Is it really free to upgrade?",
       a3 : 'Yes. Windows 10 is a free upgrade for qualified Windows 7 SP1, Windows 8.1 Update and Windows Phone 8.1 devices. This free upgrade is offered for one year after Windows 10 is available. After you upgrade, Windows 10 is yours to enjoy.',
       q4 : "Which devices qualify for the free upgrade?",
       a4 : 'It is our intent that the vast majority devices running Windows 7 SP1, Windows 8.1 Update and Windows Phone 8.1 will qualify, but some hardware/software requirements apply and feature availability may vary by device. Devices must be connected to the internet and have Windows Update enabled.'
     }
   }
  constructor() { }

  ngOnInit() {
  }

}
