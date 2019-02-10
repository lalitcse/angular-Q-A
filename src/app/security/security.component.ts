import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  securitytitle = 'App security help and support';
  data = [
    {
      q1 : "Q - Can I be reached while on vacation if something happens at my home?",
      a1 : 'A - Mule Security allows clients to make temporary changes to their emergency call list in order to accommodate travel.  You can modify your call list so that a close friend or relative is notified who can in turn notify you or you may provide your vacation information.  In either case, you will be able to find out if anything has happened in your absence.'
    },
    {
      q1 : "Q - Can I receive reports of the activity occurring at my home or business?",
      a1 : 'A - Systems can be programmed to send signals directly to our receiver when the system is armed and disarmed.  Reports can be mailed, faxed, or emailed.'
    },
    {
      q1 : " Q -Will someone work with me to determine what security features my building will need without overselling me?",
      a1 : 'A - Definitely.  At Mule Security, we strive to develop a security solution that meets your specific needs within your budget.  An experienced sales rep will meet with you for a no-cost evaluation of your security needs and can make recommendations of what options would be appropriate.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
