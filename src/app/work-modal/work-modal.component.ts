import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-work-modal',
  templateUrl: './work-modal.component.html',
  styleUrls: ['./work-modal.component.scss']
})
export class WorkModalComponent implements OnInit {
  @Input() examples;
  @Input() currentProject;
  @Input() isSmallScreen;
  @Output() closingModal = new EventEmitter();
  selected = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeModal() {
    this.closingModal.emit(true);
  }

  viewCode() {
    window.open(this.examples[this.currentProject].code, '_blank');
  }
  viewProduct() {
    if(this.examples[this.currentProject].product !== '') {
      window.open(this.examples[this.currentProject].product, '_blank');
    } else {
      window.open(this.examples[this.currentProject].imagesUrl, '_blank');
    }
  }
}
