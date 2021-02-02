import {Directive, EventEmitter, Inject, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective  implements OnInit, OnDestroy {
  @Input() matchId: string;
  @Output() appScrollTracker = new EventEmitter();
  constructor() {}

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
   window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = async (event: any) => {
    if (event.target.id === this.matchId) {
      this.appScrollTracker.emit(event);
    }
  }
}
