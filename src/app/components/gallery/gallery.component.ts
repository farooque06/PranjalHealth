import { Component, HostListener, OnInit } from '@angular/core';
import { IGallery } from 'src/app/interfaces/service.interface';
import { GalleryService } from 'src/app/services/gallery.service';

export interface IGalleryItem extends IGallery {
  id: number;
  featured?: boolean;
  aspect?: 'wide' | 'tall' | 'large' | 'normal';
  tags?: string[];
}

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    standalone: false
})
export class GalleryComponent implements OnInit {
  gallery: IGalleryItem[] = [];
  filteredGallery: IGalleryItem[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All Photos';
  viewMode: 'bento' | 'grid' = 'bento';

  // Lightbox Modal State
  isLightboxOpen: boolean = false;
  activeImageIndex: number = 0;
  isZoomed: boolean = false;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    const rawGallery = this.galleryService.getGallery();
    
    // Assign layout aspects for the rich Bento dynamic layout
    this.gallery = rawGallery.map((item, index) => {
      let aspect: 'wide' | 'tall' | 'large' | 'normal' = 'normal';
      let featured = false;

      if (index === 0) {
        aspect = 'large'; // Building main
        featured = true;
      } else if (index === 1 || index === 5) {
        aspect = 'tall'; // Lab analyzer / USG
      } else if (index === 2 || index === 8) {
        aspect = 'wide'; // X-Ray suite / Reception
      } else if (index === 10) {
        aspect = 'large'; // Lab facility overview
        featured = true;
      } else {
        aspect = 'normal';
      }

      return {
        ...item,
        id: index,
        featured,
        aspect,
        tags: this.getTagsForCategory(item.category || '')
      };
    });

    this.filteredGallery = this.gallery;
    this.categories = this.galleryService.getCategories();
  }

  getTagsForCategory(category: string): string[] {
    switch (category) {
      case 'Infrastructure & Center':
        return ['Air-Conditioned', 'Waiting Lounge', 'Lift & Accessibility'];
      case 'Pathology & Clinical Lab':
        return ['Automated Analyzers', 'ISO Protocols', 'Same-Day Fasting'];
      case 'Radiology & Diagnostics':
        return ['Low Radiation', '4D Ultrasound', 'Radiologist Certified'];
      case 'Pharmacy & Consultation':
        return ['Genuine Medicines', 'Private OPD', 'Daily Specialist'];
      default:
        return ['Certified Facility', 'Sterile Environment'];
    }
  }

  getCategoryIcon(cat: string): string {
    switch (cat) {
      case 'Infrastructure & Center':
        return 'fa-hospital';
      case 'Pathology & Clinical Lab':
        return 'fa-flask-vial';
      case 'Radiology & Diagnostics':
        return 'fa-x-ray';
      case 'Pharmacy & Consultation':
        return 'fa-pills';
      default:
        return 'fa-images';
    }
  }

  getCategoryCount(cat: string): number {
    if (cat === 'All Photos') {
      return this.gallery.length;
    }
    return this.gallery.filter(item => item.category === cat).length;
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'All Photos') {
      this.filteredGallery = this.gallery;
    } else {
      this.filteredGallery = this.gallery.filter(item => item.category === category);
    }
  }

  setViewMode(mode: 'bento' | 'grid'): void {
    this.viewMode = mode;
  }

  openLightbox(index: number): void {
    this.activeImageIndex = index;
    this.isLightboxOpen = true;
    this.isZoomed = false;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
    this.isZoomed = false;
    document.body.style.overflow = '';
  }

  toggleZoom(): void {
    this.isZoomed = !this.isZoomed;
  }

  nextImage(): void {
    if (this.filteredGallery.length > 0) {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.filteredGallery.length;
      this.isZoomed = false;
    }
  }

  prevImage(): void {
    if (this.filteredGallery.length > 0) {
      this.activeImageIndex = (this.activeImageIndex - 1 + this.filteredGallery.length) % this.filteredGallery.length;
      this.isZoomed = false;
    }
  }

  jumpToImage(index: number): void {
    this.activeImageIndex = index;
    this.isZoomed = false;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.isLightboxOpen) return;

    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }
}
