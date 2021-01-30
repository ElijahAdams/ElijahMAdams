import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import { data } from './work_examples.js'
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  @Input() isSmallScreen;
  descriptionLineHeight = 20;
  examples = data;
  selected = 0;
  constructor(private totalBody: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    (this.totalBody.nativeElement as HTMLElement).
      style.setProperty('--lineHeight', this.descriptionLineHeight + 'px');
  }

  hover(example, i) {
    const cardHeight = document.getElementById(`exampleCard${i}`).getBoundingClientRect().height;
    // const titleHeight = document.getElementById(`title${i}`).getBoundingClientRect().height;
    // const buttonHeight = document.getElementById(`buttonWrapper${i}`).getBoundingClientRect().height;
    const remainderHeight = cardHeight - 70 - 45;
    const allowDescriptionHeight = Math.floor(remainderHeight/ this.descriptionLineHeight) * this.descriptionLineHeight;

    (this.totalBody.nativeElement as HTMLElement).
    style.setProperty('--allowableDescriptionHeight',  allowDescriptionHeight + 'px');
    example.showText = true;
  }

  hoverComplete(example) {
    example.showText = false;
  }

  openUpProjectView(example) {
    console.log(example.name)
  }

}
