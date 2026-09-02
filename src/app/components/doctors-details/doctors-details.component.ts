import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDoctors } from 'src/app/interfaces/service.interface';
import { DoctorsService } from 'src/app/services/doctors.service';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-doctors-details',
    templateUrl: './doctors-details.component.html',
    styleUrls: ['./doctors-details.component.scss'],
    standalone: false
})
export class DoctorsDetailsComponent implements OnInit {
  data: IDoctors | undefined;
  relatedDoctors: IDoctors[] = [];
  currentIndex: number = 0;
  placeholderImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public doctorsService: DoctorsService,
    private imagePlaceholderService: ImagePlaceholderService
  ) {}

  ngOnInit(): void {
    this.placeholderImage = this.imagePlaceholderService.getDoctorPlaceholder();
    
    this.route.paramMap.subscribe(params => {
      const indexStr = params.get('index');
      if (indexStr !== null) {
        this.currentIndex = +indexStr;
        this.data = this.doctorsService.getDoctorBYIndexNO(this.currentIndex);
        
        if (this.data) {
          // Get other doctors for the sidebar
          this.relatedDoctors = this.doctorsService
            .getDoctors()
            .filter(d => d.index !== this.currentIndex)
            .slice(0, 5);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  onImageError(event: any): void {
    event.target.src = this.placeholderImage;
  }

  navigateToDoctor(index: number): void {
    this.router.navigate(['/doctors-details', index]);
  }
}
