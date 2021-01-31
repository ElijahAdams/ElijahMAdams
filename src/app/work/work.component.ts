import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import { data } from './work_examples.js'
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  @Input() pages;
  @Input() isSmallScreen;
  descriptionLineHeight = 20;
  examples = data;
  selected = 0;
  currentProject = 0;
  isModalOpen = false;
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
  discoverShowing(event) {
    for (let i = 0; i < this.examples.length; i++) {
      const ele: any = document.getElementById(`mobileExampleCard${i}`).getBoundingClientRect();
      if (ele.x > 0 && ele.x < screen.width) {
        this.selected = i;
        break;
      }
    }
  }
  scrollToCard(i) {
    document.getElementById(`mobileExampleCard${i}`).scrollIntoView({behavior: 'smooth'})
  }

  openUpProjectView(i) {
    this.currentProject = i;
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  goToPage(page) {
    document.getElementById(`${page.name}PageContainer`).scrollIntoView({behavior: 'smooth'})
  }
}
