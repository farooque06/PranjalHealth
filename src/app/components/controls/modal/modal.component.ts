import { Component, Input, OnInit } from '@angular/core';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: false
})
export class ModalComponent implements OnInit {
  private _imageSrc: string = "";

  @Input() set imageSrc(val: string) {
    this._imageSrc = val;
  } get imageSrc() {
    return this._imageSrc;
  }
  //modal: any;
  constructor(
    private imagePlaceholderService: ImagePlaceholderService
   // private modalService: NgbModal
  ) {

  }

  ngOnInit(): void {
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'generic');
  }

}
