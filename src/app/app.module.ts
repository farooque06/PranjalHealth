import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/controls/header/header.component';
import { SliderComponent } from './components/controls/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/controls/card/card.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurDoctorsComponent } from './components/our-doctors/our-doctors.component';
import { TestimonialComponent } from './components/controls/testimonial/testimonial.component';
import { FooterComponent } from './components/controls/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { OurServicesDetailsComponent } from './components/our-services-details/our-services-details.component';
import { LogoComponent } from './components/controls/logo/logo.component';
import { DoctorSliderComponent } from './components/controls/doctor-slider/doctor-slider.component';
import { ServicesMainComponent } from './components/services-main/services-main.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DoctorsDetailsComponent } from './components/doctors-details/doctors-details.component';
import { GalleryOptComponent } from './components/gallery-opt/gallery-opt.component';
import { ModalGalleryComponent } from './components/controls/modal-gallery/modal-gallery.component';
import { AboutPageComponent } from './components/about-page/about-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CardComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurDoctorsComponent,
    TestimonialComponent,
    FooterComponent,
    HomeComponent,
    OurServicesDetailsComponent,
    LogoComponent,
    DoctorSliderComponent,
    ServicesMainComponent,
    DoctorsComponent,
    ContactComponent,
    GalleryComponent,
    DoctorsDetailsComponent,
    GalleryOptComponent,
    ModalGalleryComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
