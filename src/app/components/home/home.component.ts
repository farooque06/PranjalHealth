import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Best Diagnostic & Healthcare Center in Kathmandu | Pranjal Healthcare',
      description: 'Pranjal Diagnostic & Healthcare Center Pvt. Ltd. is Kathmandu’s top-rated clinic offering automated pathology, digital X-Ray, 4D USG, specialist OPD doctor consultations, and pharmacy in Pepsicola Townplanning, Kathmandu.',
      keywords: 'best hospital Kathmandu, best clinic Pepsicola, best doctor Kathmandu, diagnostic center Kathmandu, blood test near me, pathology lab Nepal, digital X-Ray Kathmandu, USG Pepsicola, Pranjal Healthcare',
      url: '/'
    });
  }

}
