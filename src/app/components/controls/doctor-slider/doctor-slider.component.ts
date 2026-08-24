import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';
@Component({
  selector: 'app-doctor-slider',
  templateUrl: './doctor-slider.component.html',
  styleUrls: ['./doctor-slider.component.scss']
})
export class DoctorSliderComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorsService
  ) {

  }

  slides: any[] = [];
  //   { img: "assets/images/home-page/doctors-image/doctor.png", title: "kjashdkasdffhk", subTitle: "akjdsklfjkljlkj" },
  //   { img: "assets/images/home-page/doctors-image/doctor0.jpg", title: "kjash", subTitle: "akjdsklfjkljlkj" },
  //   { img: "assets/images/home-page/doctors-image/doctor1.jpg", title: "kjashasdf asdf dkfhk", subTitle: "akjdsklfjkljlkj" },
  //   { img: "assets/images/home-page/doctors-image/doctor2.jpg", title: "aaaaaaaaaaaaaaa", subTitle: "akjdsklfjkljlkj" },
  //   { img: "assets/images/home-page/doctors-image/doctor.png", title: "bbbbbbbbbbbb", subTitle: "akjdsklfjkljlkj" },
  //   { img: "assets/images/home-page/doctors-image/doctor1.jpg", title: "ccccccccccccccccccc", subTitle: "akjdsklfjkljlkj" },
  // ];

  slideConfig = { 
    "slidesToShow": 2,
     "slidesToScroll": 1,
     "autoplay":true ,
     "dots":true,
     "autoplaySpeed":1000 ,
     "responsive": [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      },
     ]
     };     // ,"autoplay":true ,"autoplaySpeed":500 , "dots":true

  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }

  breakpoint(e: any) {
    
    console.log(e, 'breakpoint');
  }

  // afterChange(e: any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }

  ngOnInit(): void {
    const doctors = this.doctorService.getDoctors();
    doctors.forEach(element => {
      this.slides.push(
        { img: element.image, title: element.title, subTitle: element.content },
      )
      
    });

  }

  showDetails(index: number){
      this.router.navigate(["doctors-details",index])
    }

}
