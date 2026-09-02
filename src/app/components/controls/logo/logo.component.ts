import { Component, OnInit } from '@angular/core';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss'],
    standalone: false
})
export class LogoComponent implements OnInit {

  constructor(private imagePlaceholderService: ImagePlaceholderService) { }

  ngOnInit(): void {
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'generic');
  }

}
