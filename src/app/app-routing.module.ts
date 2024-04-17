import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"",redirectTo:"home" ,pathMatch:'full'},
  {path:"home",component:AboutComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"resume",component:ResumeComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
