import { Component, OnInit } from '@angular/core';
import { data } from './work_examples.js'
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  examples = data;
  constructor() { }

  ngOnInit() {
  }

  hover(example) {
    example.showText = true;
  }

  hoverComplete(example) {
    example.showText = false;
  }

  openUpProjectView(example) {
    console.log(example.name)
  }

}
