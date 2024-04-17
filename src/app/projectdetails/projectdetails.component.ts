import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent {
  projectDetails:any
    constructor( @Inject(MAT_DIALOG_DATA) public data:any){
    this.projectDetails=this.data
   }
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,

    autoplay:true,
    autoplaySpeed:1000,
    autoplayTimeout:2000,
    navSpeed: 2000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
}


