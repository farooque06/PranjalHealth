import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IServices } from 'src/app/interfaces/service.interface';
import { ServicesService } from 'src/app/services/services.service';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-our-services-details',
    templateUrl: './our-services-details.component.html',
    styleUrls: ['./our-services-details.component.scss'],
    standalone: false
})
export class OurServicesDetailsComponent implements OnInit {
  data: IServices | undefined;
  allServices: IServices[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServicesService,
    private imagePlaceholderService: ImagePlaceholderService
  ) {}

  ngOnInit(): void {
    this.allServices = this.service.getServices();

    this.route.paramMap.subscribe(params => {
      const indexStr = params.get('index');
      if (indexStr !== null) {
        this.currentIndex = +indexStr;
        this.data = this.service.getServiceByIndexNo(this.currentIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  navigateToService(index: number): void {
    this.router.navigate(['/our-services-details', index]);
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'gallery');
  }

  getWhatsAppLink(title: string = ''): string {
    const text = encodeURIComponent(`Hello Pranjal Healthcare, I want to inquire/book an appointment for: ${title}`);
    return `https://wa.me/9779864156565?text=${text}`;
  }
}
