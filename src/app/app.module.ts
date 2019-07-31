import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Modules

import { RouterModule } from "@angular/router";
import { AgmCoreModule } from "@agm/core";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AdmissionsComponent } from "./admissions/admissions.component";
import { SyllabusComponent } from "./syllabus/syllabus.component";
import { ResultsComponent } from "./results/results.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { GalleryComponent } from "./gallery/gallery.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmissionsComponent,
    SyllabusComponent,
    ResultsComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "syllabus", component: SyllabusComponent },
      { path: "admissions", component: AdmissionsComponent },
      { path: "results", component: ResultsComponent },
      { path: "about-us", component: AboutUsComponent },
      { path: "contact-us", component: ContactUsComponent },
      { path: "gallery", component: GalleryComponent }
    ]),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAz3iewIzC6ez2zfEHdbkE28TbuJQ-hIXg"
    }),
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
