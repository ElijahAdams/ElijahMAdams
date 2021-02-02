import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-work-modal',
  templateUrl: './work-modal.component.html',
  styleUrls: ['./work-modal.component.scss']
})
export class WorkModalComponent implements OnInit {
  @Input() examples;
  @Input() currentProject;
  @Output() closingModal = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.currentProject);
  }

  closeModal() {
    this.closingModal.emit(true);
  }

  viewCode() {
    window.open(this.examples[this.currentProject].code, '_blank');
  }
  viewProduct() {
    window.open(this.examples[this.currentProject].product, '_blank');
  }

  viewImages() {

  }

}
