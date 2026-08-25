import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    standalone: false
})
export class SliderComponent implements OnInit {
  slides = [
    {
      img: "assets/images/home-page/banner/Building1.jpg",
      tag: "Modern Healthcare Facility",
      title: "Advanced Diagnostic & Pathology Services",
      desc: "Equipped with state-of-the-art pathology automation and diagnostic technology for fast, reliable health reports."
    },
    {
      img: "assets/images/home-page/banner/banner02.jpg",
      tag: "Expert Medical Team",
      title: "Consultation with Specialist Doctors",
      desc: "Book your appointment with experienced physicians, cardiologists, gynecologists, and pediatricians."
    },
    {
      img: "assets/images/home-page/banner/banner03.jpg",
      tag: "Precision Imaging",
      title: "Digital X-Ray & Ultrasonography",
      desc: "High-definition diagnostic imaging services conducted by certified radiology technicians."
    },
    {
      img: "assets/images/home-page/banner/banner04.jpg",
      tag: "Comprehensive Care",
      title: "Echocardiography & ECG Testing",
      desc: "Complete cardiac diagnostic evaluation with modern 4D Echocardiography equipment."
    }
  ];

  slideConfig = {
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // slower, relaxed speed (5.5 seconds)
    dots: true, // pagination dots enabled
    arrows: true, // next/prev arrows enabled
    fade: true, // smooth fade transition between slides
    cssEase: 'linear',
    pauseOnHover: true
  };
  
  slickInit(e: any) {
  }
  
  breakpoint(e: any) {
  }
  
  afterChange(e: any) {
  }
  
  beforeChange(e: any) {
  }

  ngOnInit(): void {
  }
}
