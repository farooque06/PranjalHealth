import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides = [
    {img: "assets/images/home-page/banner/Building1.jpg"},
    {img: "assets/images/home-page/banner/banner02.jpg"},
    {img: "assets/images/home-page/banner/banner03.jpg"},
    {img: "assets/images/home-page/banner/banner04.jpg"},
    {img: "assets/images/home-page/banner/banner05.jpg"},
    {img: "assets/images/home-page/banner/banner06.jpg"},
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "autoplay":true ,
    "autoplaySpeed":2000
    // "responsive": [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  };
  
  slickInit(e: any) {
 //ks   console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    // this.carousel.config={
    //   slidesToShow: e.breakpoint===400? 1 : 2
    // }
    // this.carousel.initSlick();
    // console.log(this.carousel.config)
    // if(e.breakpoint===400){
    //   this.slideConfig = {
    //     "slidesToShow": 1, 
    //     "slidesToScroll": 1,
    //     'responsive': [
    //       {
    //         'breakpoint': 400,
    //         'slidesToShow': 1
    //       },
    //       {
    //         'breakpoint': 767,
    //         'slidesToShow': 1
    //       },
    //       {
    //         'breakpoint': 1024,
    //         'slidesToShow': 2
    //       }
    //     ]};
    // }
    console.log(e, 'breakpoint');
  }
  
  afterChange(e: any) {
   // console.log('afterChange');
  }
  
  beforeChange(e: any) {
   // console.log('beforeChange');
  }
  ngOnInit(): void {
      }

}
