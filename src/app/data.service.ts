import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
 /*  slider:string[]=[
    "/assets/image/cover/ecomCover.png",
    "/assets/image/cover/animCover.png",
    "/assets/image/cover/brandCover.png",
    "/assets/image/cover/calculateCover.png",
    "/assets/image/cover/taskCover1.png",
    "/assets/image/cover/kasperCover.png",
    "/assets/image/cover/letterCover.png",
    "/assets/image/cover/specialCover.png",
    "/assets/image/cover/taskCover2.png",
  ] */
  projectsData:any[]=[
    {
      id:"1",
      name:"E-commerce",
      coverimage:"/assets/image/cover/ecomCover.png" ,
      image:[
        "/assets/image/ecommerce/ecom1.png",
        "/assets/image/ecommerce/ecom2.png",
        "/assets/image/ecommerce/ecom3.png",
        "/assets/image/ecommerce/ecom4.png",
        "/assets/image/ecommerce/ecom5.png",
        "/assets/image/ecommerce/ecom6.png",
        "/assets/image/ecommerce/ecom7.png",
        "/assets/image/ecommerce/ecom8.png",
      ],
      github:"https://github.com/kerolosnady202/Ecommerce",
      live:'https://kerolosnady202.github.io/Ecommerce/',
      desc:'A creative e-commerce web site designed to provide users with a seamless shopping experience',
      tools:[
        "HTML","CSS","TypeScript","Angular","Web API"
      ]
    },
    {
      id:"2",
      name:"Brand",
      coverimage:"/assets/image/cover/animCover.png",
      desc:'this is my second project using HTML and CSS',
      image:[
        "/assets/image/anim/anim1.png",
        "/assets/image/anim/anim2.png",
        "/assets/image/anim/anim3.png",
        "/assets/image/anim/anim4.png",
        "/assets/image/anim/anim5.png",
        "/assets/image/anim/anim6.png",
        "/assets/image/anim/anim7.png",
        "/assets/image/anim/anim8.png",
        "/assets/image/anim/anim9.png",
        "/assets/image/anim/anim10.png",
      ],
      github:"https://github.com/kerolosnady202/HTML_And_CSS-template",
      live:'https://kerolosnady202.github.io/HTML_And_CSS-template/',
      tools:[
        "HTML","CSS"
      ]
    },
    {
      id:"3",
      name:"Task Mangement",
      coverimage:"/assets/image/cover/taskCover2.png",
      desc:'This website facilitates tasks management between admins and users.',
      image:[
        "/assets/image/task/task1.png",
        "/assets/image/task/task2.png",
        "/assets/image/task/task3.png",
        "/assets/image/task/task4.png",
        "/assets/image/task/task5.png",
        "/assets/image/task/task6.png",
        "/assets/image/task/task7.png",
        "/assets/image/task/task8.png",
      ],
      github:"https://github.com/kerolosnady202/Tasks-Management",
      live:'',
      tools:[
        "HTML","SASS","TypeScript","Angular","Angualr Material","Web API"
      ]
    },
    {
      id:"4",
      name:"Kasper",
      coverimage:"/assets/image/cover/kasperCover.png",
      image:[
        "/assets/image/kasper/kasper1.png",
        "/assets/image/kasper/kasper2.png",
        "/assets/image/kasper/kasper3.png",
        "/assets/image/kasper/kasper4.png",
        "/assets/image/kasper/kasper5.png",
        "/assets/image/kasper/kasper6.png",
        "/assets/image/kasper/kasper7.png",
      ],
      github:"https://github.com/kerolosnady202/kasper",
      live:'https://kerolosnady202.github.io/kasper/',
      desc:'this is my second project using HTML and CSS ,This website template for a fictional company called KASPAR',
      tools:[
        "HTML","CSS"
      ]
    },
    {
      id:"5",
      name:"calculator",
      coverimage:"/assets/image/cover/calculateCover.png",
      image:[
        "/assets/image/calculate/calculate.png",
      ],
      github:"https://github.com/kerolosnady202/Calculator-app",
      live:'https://kerolosnady202.github.io/Calculator-app/',
      desc:'The website is designed for performing simple calculations of mathematical expressions',
      tools:[
        "HTML","CSS","JavaScript"
      ]
    },
    {
      id:"6",
      name:"Learning-English Letter",
      coverimage:"/assets/image/cover/letterCover.png",
      image:[
        "/assets/image/letter/letter1.png",
        "/assets/image/letter/letter2.png",
        "/assets/image/letter/letter3.png",
      ],
      github:"https://github.com/kerolosnady202/English-letter",
      live:'https://kerolosnady202.github.io/English-letter/',
      desc:'this is my second project using HTML and CSS ,This website template for a fictional company called KASPAR',
      tools:[
        "HTML","CSS","JavaScript"
      ]
    },
    {
      id:"7",
      name:"Brand",
      coverimage:"/assets/image/cover/brandCover.png",
      desc:'this is my First project using Bootstrap Framework',
      image:[
        "/assets/image/brand/brand1.png",
        "/assets/image/brand/brand2.png",
        "/assets/image/brand/brand3.png",
        "/assets/image/brand/brand4.png",
        "/assets/image/brand/brand5.png",
        "/assets/image/brand/brand6.png",
      ],
      github:"https://github.com/kerolosnady202/Bootstrap-Project",
      live:'https://kerolosnady202.github.io/Bootstrap-Project/',
      tools:[
        "HTML","CSS","JavaScript","BootStrap"
      ]
    },
    {
      id:"8",
      name:"Special Design",
      coverimage:"/assets/image/cover/specialCover.png",
      desc:'this is my First project using JavaScript',
      image:[
        "/assets/image/special/special1.png",
        "/assets/image/special/special2.png",
        "/assets/image/special/special3.png",
        "/assets/image/special/special4.png",
        "/assets/image/special/special5.png",
        "/assets/image/special/special6.png",
      ],
      github:"https://github.com/kerolosnady202/SpecialDesign-JS",
      live:'https://kerolosnady202.github.io/SpecialDesign-JS/',
      tools:[
        "HTML","CSS","JavaScript"
      ]
    },
  ]
  getspacificproject(id:string):any{
     let project=this.projectsData.find(project=>project.id === id)

     if (project === undefined) {
      return false
     }else{
      return project
     }
     /* let projectm:any
     this.projectsData.forEach((project)=>{
      if (project.id === id) {
          projectm =project
      }
     })
     if (projectm === undefined) {
      return false
     }else{
      return projectm
     }  */


  }
}
