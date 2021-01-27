import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail() {
    const user = {
      name: 'test',
      email: 'thefunktory@gmail.com',
      message: 'hello darkness my old friend'
    };
    this.http.post('http://127.0.0.1:3000/sendEmail', user).subscribe(data => {
      console.log('email sent')
    }, err => {
      console.log('something went wrong');
    })
  }
}
