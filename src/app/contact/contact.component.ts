import {Component, Input, OnInit} from '@angular/core';
import {EmailService} from "../email/email.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() pages;
  contactForm;
  isSending = false;
  constructor(private emailService: EmailService, private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    this.sendEmail();
  }
  sendEmail() {
    const emailInfo = {
      name: this.contactForm.controls.name.value,
      email: this.contactForm.controls.email.value,
      message: this.contactForm.controls.message.value
    };
    this.isSending = true;
    this.emailService.sendEmail(emailInfo).subscribe(data => {
      this.isSending = false;
      const message = 'Email Sent';
      const action = 'Close';
      this.openSnackBar(message, action);
      this.contactForm.reset();
    }, err => {
      console.log('something went wrong');
      this.isSending = false;
      const message = 'Sorry something went wrong';
      const action = 'Close';
      this.openSnackBar(message, action);
    });
  }
  goToPage(page) {
    document.getElementById(`${page.name}PageContainer`).scrollIntoView({behavior: 'smooth'})
  }

  openSnackBar(m, a) {
    this.snackBar.open(m, a, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
