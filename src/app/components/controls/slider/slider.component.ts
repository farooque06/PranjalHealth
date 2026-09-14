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
      title: "Specialist Doctors & Advanced Diagnostic",
      titleNepali: "विशेषज्ञ डाक्टरहरू तथा अत्याधुनिक निदान सेवा",
      desc: "Equipped with state-of-the-art pathology automation and diagnostic technology for fast, reliable health reports."
    },
    {
      img: "assets/images/home-page/banner/teamPranjal2.jpg",
      tag: "Our Team • हाम्रो टिम",
      title: "Our Dedicated Team",
      titleNepali: "हाम्रो समर्पित चिकित्सा टिम",
      desc: "A passionate team of healthcare professionals committed to delivering exceptional patient care and service excellence."
    },
    {
      img: "assets/images/gallery/gallery8.jpg",
      tag: "OPD Service • ओपीडी सेवा",
      title: "OPD Service",
      titleNepali: "ओपीडी सेवा",
      desc: ""
    },
    {
      img: "assets/images/home-page/banner/DSC_8093.jpg",
      tag: "Advanced Pathology",
      title: "Advanced Pathology Service",
      titleNepali: "एडभान्स प्याथोलोजी सेवा",
      desc: ""
    },
    {
      img: "assets/images/home-page/services/ECHO.jpeg",
      tag: "Echocardiogram • इकोकार्डियोग्राम",
      title: "Echocardiogram Service",
      titleNepali: "इकोकार्डियोग्राम सेवा",
      desc: ""
    },
    {
      img: "assets/images/home-page/banner/banner03.jpg",
      tag: "Physiotherapy and Rehabilitation",
      title: "Physiotherapy and Rehabilitation",
      titleNepali: "फिजियोथेरापी तथा पुनर्वास सेवा",
      desc: ""
    },
    {
      img: "assets/images/home-page/banner/banner04.jpg",
      tag: "Comprehensive Care • मुटुरोग निदान",
      title: "Digital X-Ray",
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
