import {Component, OnInit} from '@angular/core';
import {fromEvent, Observable, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pages = [
    {name: 'home', url: 'home'},
    {name: 'about', url: 'about'},
    {name: 'work', url: 'work'},
    {name: 'contact', url: 'contact'},
  ];
  isSmallScreen = false;
  showMobileMenu = false;
  resizeObs: Observable<Event>;
  resizeeSub: Subscription;
  constructor() {
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 600  ? true : false;
    this.resizeObs = fromEvent(window, 'resize');
    this.resizeeSub = this.resizeObs.pipe(debounceTime(25)).subscribe( evt => {
      this.isSmallScreen = window.innerWidth < 600 ? true : false;
    });
  }
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
