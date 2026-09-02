import { Component, OnInit } from '@angular/core';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-gallery-opt',
    templateUrl: './gallery-opt.component.html',
    styleUrls: ['./gallery-opt.component.scss'],
    standalone: false
})
export class GalleryOptComponent implements OnInit {

  constructor(private imagePlaceholderService: ImagePlaceholderService) { }

  ngOnInit(): void {
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'gallery');
  }

}
