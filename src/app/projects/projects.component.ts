import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ProjectdetailsComponent } from '../projectdetails/projectdetails.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects:any[]=[]
  spacialproject:any
  constructor(private titleSer:Title , private serdata:DataService , private dialog:MatDialog){
    this.titleSer.setTitle("kerolos nady | My projects")
    this.projects=this.serdata.projectsData
  }
  getproject(id:string){
    this.spacialproject=this.serdata.getspacificproject(id)
    if (this.spacialproject !== undefined) {
      const dialogRef = this.dialog.open(ProjectdetailsComponent, {
        width:'500px',
        /* maxHeight:'350px', */
        maxHeight: '80vh',
        data:this.spacialproject
      });
    }
  }
}
