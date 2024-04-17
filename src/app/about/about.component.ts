import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  slider:any[]=[]
  constructor(private titleSer:Title, private silderima:DataService){
    this.titleSer.setTitle("kerolos nady | Home")
    this.slider=this.silderima.projectsData
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
}
