import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { data } from './work_examples.js'
import {animate, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('modalAni', [
      transition(':enter', [
        style({ opacity: '0'}),
        animate('400ms ease-in', style({ opacity: '.98'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({opacity: '0'}))
      ])
    ])
  ]
})
export class WorkComponent implements OnInit, AfterViewInit {
  @Input() pages;
  @Input() isSmallScreen;
  @Output() canScroll = new EventEmitter();
  descriptionLineHeight = 20;
  examples = data;
  selected = 0;
  currentProject = 0;
  isModalOpen = false;
  constructor(private totalBody: ElementRef, private cdr: ChangeDetectorRef) { }

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
    if(!this.isSmallScreen) {
      this.canScroll.emit(false);
    }
  }
  closeModal() {
    this.isModalOpen = false;
    this.canScroll.emit(true);
  }
  prevProject() {
    this.currentProject--;
  }
  nextProject() {
    this.currentProject++;
  }
  goToPage(page) {
    document.getElementById(`${page.name}PageContainer`).scrollIntoView({behavior: 'smooth'})
  }
}
