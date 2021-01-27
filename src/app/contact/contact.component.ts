import { Component, OnInit } from '@angular/core';
import {EmailService} from "../email/email.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailService) { }
  contactForm;
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
    this.emailService.sendEmail(emailInfo);
  }
}
