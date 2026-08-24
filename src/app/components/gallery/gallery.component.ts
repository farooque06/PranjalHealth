import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryService } from 'src/app/services/gallery.service';
// import { FooterComponent } from '../controls/footer/footer.component';
// import { ModalComponent } from '../controls/modal/modal.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery: any[] = [];
  imageSrc: string="";
  constructor(
    private galleryservices: GalleryService,
    private modalService: NgbModal, 
  //private modalComponent: ModalComponent
  ) { }

  ngOnInit(): void {
    this.gallery = this.galleryservices.getGallery();
  }

  showPreview(context: any, imageSrc: string) {
this.imageSrc = imageSrc;

  //   const t = new ModalComponent(this.modalService)
  //   t.imageSrc = imageSrc;
  //  // this.modalComponent.imageSrc = imageSrc;

    //const context=  ModalComponent; 
    //context
    // this.imageSrc = imageSrc;
  //   const html = `
  //     <div class='modal-header'>
  //         <h4 class="modal-title">Image Preview</h4>
  //     <button type="button" class="btn-close" aria-label="Close"
  //         (click)="modal.dismiss('Cross click')"></button>
  //     </div>
  //   <div class="modal-body">
  //       <img [src]=${imageSrc}>
  //   </div>
  // `;

    // const t = content.elementRef.nativeElement
    // console.log(t);
    //console.log(content)

    //console.log ((content.elementRef.nativeElement as HTMLElement).querySelectorAll(".modal-body"));
    this.modalService.open(context, { fullscreen: true });
  }

}
