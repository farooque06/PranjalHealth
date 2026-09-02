import { Component, OnInit } from '@angular/core';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
    standalone: false
})
export class AboutUsComponent implements OnInit {

  constructor(private imagePlaceholderService: ImagePlaceholderService) { }

  ngOnInit(): void {
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'generic');
  }

}
