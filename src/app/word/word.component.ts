import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  data = [
    {
      q1 : "Q - Put your best words forward ?",
      a1 : 'A - Write with confidence, knowing intelligent technology can help with spelling, grammar and even stylistic writing suggestions. With tools at your fingertips, easily go from pen and paper to digital inking and edit intuitively.'
    },
    {
      q1 : "Q - Stay in the flow ?",
      a1 : 'A - Get all the information you need as you write without leaving Word, whether it’s a teammate’s PowerPoint slide, cited research, or information from LinkedIn to help you craft a compelling resume.'
    },
    {
      q1 : "Q - Work better together ?",
      a1 : 'A - Wherever you are, collaborate in real time. Share your documents with the click of a button to invite others to edit in realtime or add comments. Plus, no matter your preferred full language or accessibility options, everyone can work together to do more.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
