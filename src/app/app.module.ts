import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutChairmanComponent } from './about-chairman/about-chairman.component';
import { AboutDirectorComponent } from './about-director/about-director.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { JaipurNationalUniversityComponent } from './jaipur-national-university/jaipur-national-university.component';
import { MaharajVinayakGlobalComponent } from './maharaj-vinayak-global/maharaj-vinayak-global.component';

let router : Routes = [
  {
    path :'body',
    component : BodyComponent
  },
  {
    path : 'AboutChairman',
    component: AboutChairmanComponent
  },
  {
    path : 'AboutDirector',
    component : AboutDirectorComponent
  },
  {
    path : 'OurVision',
    component: OurVisionComponent
  },
  {
    path :'JaipurNationalUniversity',
    component: JaipurNationalUniversityComponent
  },
  {
    path : 'MaharajVinayakGlobal',
    component:MaharajVinayakGlobalComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutChairmanComponent,
    AboutDirectorComponent,
    OurVisionComponent,
    JaipurNationalUniversityComponent,
    MaharajVinayakGlobalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
