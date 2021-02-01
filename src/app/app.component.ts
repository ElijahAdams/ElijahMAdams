import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {fromEvent, Observable, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('eliPic1', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate('1200ms ease-in', style({transform: 'translateX(0%)'}))
      ])
    ]),
    trigger('oval1', [
      transition(':enter', [
        style({ transform: 'translateY(-100vh)'}),
        animate('1200ms ease-in', style({transform: 'translateY(0%)'}))
      ])
    ]),
    trigger('description', [
      transition(':enter', [
        style({ transform: 'translateX(100vh)'}),
        animate('1200ms ease-in', style({transform: 'translateX(0%)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  pages = [
    {name: 'home', url: 'home'},
    {name: 'about', url: 'about'},
    {name: 'work', url: 'work'},
    {name: 'contact', url: 'contact'},
  ];
  isSmallScreen = false;
  isMobile = false;
  showMobileMenu = false;
  isAnimationDone = false;
  canScroll = true;
  resizeObs: Observable<Event>;
  resizeeSub: Subscription;
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768 ? true : false;
    this.isSmallScreen = window.innerWidth <= 768 || window.innerHeight <= 790 ? true : false;
    this.resizeObs = fromEvent(window, 'resize');
    this.resizeeSub = this.resizeObs.pipe(debounceTime(25)).subscribe( evt => {
      this.isSmallScreen = window.innerWidth <= 768 || window.innerHeight <= 790  ? true : false;
      this.isMobile = window.innerWidth <= 768 ? true : false;
    });
  }
  ngAfterViewInit() {
    this.isAnimationDone = true;
    this.cdr.detectChanges();
  }
  scrollToSection(page) {
    if(this.isSmallScreen){
      this.showMobileMenu = false;
      this.toggleScroll(true);
    }
    document.getElementById(`${page.name}PageContainer`).scrollIntoView({behavior: 'smooth'})
  }
  goToPage(page) {
    document.getElementById(`${page.name}PageContainer`).scrollIntoView({behavior: 'smooth'})
  }
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    this.showMobileMenu ? this.toggleScroll(false) : this.toggleScroll(true);


  }
  toggleScroll(event) {
    this.canScroll = event;
  }
}
