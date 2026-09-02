import { Component, OnInit } from '@angular/core';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
    standalone: false
})
export class AboutPageComponent implements OnInit {

  constructor(private imagePlaceholderService: ImagePlaceholderService) { }

  ngOnInit(): void {
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'generic');
  }

}
