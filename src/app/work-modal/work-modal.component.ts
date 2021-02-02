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
    window.open(this.examples[this.currentProject].product, '_blank');
  }
  openImage(img) {
    window.open(img.url, '_blank');
  }

  discoverShowing(event) {
    const parentContainer = event.target.getBoundingClientRect();
    for (let i = 0; i < this.examples[this.currentProject].images.length; i++) {
      const ele: any = document.getElementById(`imageWrapper_${i}`).getBoundingClientRect();
      if (ele.x >= (parentContainer.x - 5) && ele.x <= parentContainer.x + (parentContainer.width + 5)) {
        this.selected = i;
        break;
      }
    }
  }
}
