import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {fromEvent, Observable, Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
}
