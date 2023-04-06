import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes, Scroll } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { OurDoctorsComponent } from './components/our-doctors/our-doctors.component';
import { OurServicesDetailsComponent } from './components/our-services-details/our-services-details.component';
import { ServicesMainComponent } from './components/services-main/services-main.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DoctorsDetailsComponent } from './components/doctors-details/doctors-details.component';
const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to 
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "our-services-details/:index", component: OurServicesDetailsComponent },
  { path: "our-doctors", component: OurDoctorsComponent },
  { path: "services-main", component: ServicesMainComponent },
  { path: "doctors", component: DoctorsComponent },
  { path: "contact", component: ContactComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "doctors-details/:index", component: DoctorsDetailsComponent }
];


const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
  // ...any other options you'd like to use
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
