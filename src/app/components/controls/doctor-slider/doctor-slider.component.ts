import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-doctor-slider',
    templateUrl: './doctor-slider.component.html',
    styleUrls: ['./doctor-slider.component.scss'],
    standalone: false
})
export class DoctorSliderComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorsService,
    private imagePlaceholderService: ImagePlaceholderService
  ) {}

  slides: any[] = [];

  slideConfig = { 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  breakpoint(e: any) {
  }

  ngOnInit(): void {
    const doctors = this.doctorService.getDoctors();
    doctors.forEach(element => {
      this.slides.push({
        img: element.image,
        title: element.title,
        titleNepali: element.titleNepali,
        subTitle: element.content,
        subTitleNepali: element.contentNepali,
        department: element.department,
        departmentNepali: element.departmentNepali,
        index: element.index
      });
    });
  }

  showDetails(index: number){
    this.router.navigate(["doctors-details", index]);
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'doctor');
  }
}
