import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    NotfoundComponent,
    ProjectdetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    CarouselModule,
    MatExpansionModule,
    /* FormsModule,
    ReactiveFormsModule,
    HttpClientModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
