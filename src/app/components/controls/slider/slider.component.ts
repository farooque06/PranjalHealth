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
      tag: "Modern Healthcare Facility • आधुनिक स्वास्थ्य सेवा",
      title: "Advanced Diagnostic & Pathology Services",
      titleNepali: "अत्याधुनिक ल्याब तथा रोग निदान सेवा",
      desc: "Equipped with state-of-the-art pathology automation and diagnostic technology for fast, reliable health reports."
    },
    {
      img: "assets/images/home-page/banner/teamPranjal2.jpg",
      tag: "Our Team • हाम्रो टिम",
      title: "Meet Our Dedicated Medical Team",
      titleNepali: "हाम्रो समर्पित चिकित्सा टिमलाई भेट्नुहोस्",
      desc: "A passionate team of healthcare professionals committed to delivering exceptional patient care and service excellence."
    },
    {
      img: "assets/images/home-page/banner/banner03.jpg",
      tag: "Precision Imaging • डिजिटल रेडियोलोजी",
      title: "Digital X-Ray & Ultrasonography",
      titleNepali: "डिजिटल एक्सरे तथा भिडियो एक्सरे सेवा",
      desc: "High-definition diagnostic imaging services conducted by certified radiology technicians."
    },
    {
      img: "assets/images/home-page/banner/banner04.jpg",
      tag: "Comprehensive Care • मुटुरोग निदान",
      title: "Echocardiography & ECG Testing",
      titleNepali: "मुटुको इको तथा इसिजी जाँच सेवा",
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
