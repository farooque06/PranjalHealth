import { Injectable } from '@angular/core';
import { IGallery } from '../interfaces/service.interface';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private gallery: IGallery[] = [];

  constructor() {
    this.gallery.push({
      image: "assets/images/gallery/DSC_0153.jpg",
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
    this.gallery.push({
      image: "assets/images/gallery/DSC_0140.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/DSC_0141.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/DSC_0148.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/DSC_0176.jpg",
    })
    this.gallery.push({
      image: "assets/images/gallery/DSC_0153.jpg",
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
