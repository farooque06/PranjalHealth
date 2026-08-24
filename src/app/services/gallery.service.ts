import { Injectable } from '@angular/core';
import { IGallery } from '../interfaces/service.interface';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private gallery: IGallery[] = [];

  constructor() {
    this.gallery.push({
      image: "assets/images/gallery/gallery1.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/gallery2.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/gallery3.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/gallery4.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/gallery5.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/gallery6.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/gallery7.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/gallery8.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/gallery9.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/DSC_0162.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/DSC_0164.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/DSC_0175.jpg",
    })
    
    
   }

   getGallery(){
    return this.gallery;
   }
}
