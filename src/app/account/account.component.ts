import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
title1 = 'Your account help and support';
  data = [
    {
      q1 : "Q - How to change your account name ?",
      a1 : 'A - knowing intelligent technology can help with spelling, grammar and even stylistic writing suggestions. With tools at your fingertips, easily go from pen and paper to digital inking and edit intuitively.'
    },
    {
      q1 : "Q - How to change your password ?",
      a1 : 'A - Get all the information you need as you write without leaving Word, whether it’s a teammate’s PowerPoint slide, cited research, or information from LinkedIn to help you craft a compelling resume.'
    },
    {
      q1 : "Q - How to change your mobile number?",
      a1 : 'A - Wherever you are, collaborate in real time. Share your documents with the click of a button to invite others to edit in realtime or add comments. Plus, no matter your preferred full language or accessibility options, everyone can work together to do more.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
