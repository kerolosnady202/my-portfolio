import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleSer:Title ){
    this.titleSer.setTitle("kerolos nady | Contact")
  }
/*   contactFrom:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    message:new FormControl("",[Validators.required]),
  })
  sumbit(){
    console.log("ahhhhhhhhhhhhhhhhi")
    this._http.post('https://formsubmit.co/afb37e58d4118996c149e2ff02e5a117',this.contactFrom)
  } */
}
