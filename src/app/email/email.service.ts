import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(emailInfo) {
    this.http.post('http://127.0.0.1:3000/sendEmail', emailInfo).subscribe(data => {
      console.log('email sent')
    }, err => {
      console.log('something went wrong');
    })
  }
}
