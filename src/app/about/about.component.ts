import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() pages;
  constructor() { }

  ngOnInit() {
  }

  goToHub() {
    window.open('https://github.com/ElijahAdams', '_blank');
  }
  goToResume() {
    window.open('https://elijahmadamsresources.s3.amazonaws.com/ElijahAdams-Jan2021.pdf', '_blank');
  }
  goToPage(page) {
    document.getElementById(`${page.name}PageContainer`).scrollIntoView({behavior: 'smooth'})
  }

}
