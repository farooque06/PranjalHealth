import { Component, OnInit, Input } from '@angular/core';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: false
})
export class CardComponent implements OnInit {
  private _title: string = "";
  private _imageSrc: string = "";
  private _content: string = "";
  private _showBody: boolean = true;

  private _titleNepali: string = "";
  private _contentNepali: string = "";
  private _department: string = "";
  private _departmentNepali: string = "";

  @Input() set title(val: string) {
    this._title = val;
  } get title() {
    return this._title;
  }

  @Input() set titleNepali(val: string) {
    this._titleNepali = val;
  } get titleNepali() {
    return this._titleNepali;
  }
  
  @Input() set src(val: string) {
    this._imageSrc = val;
  } get src() {
    return this._imageSrc && this._imageSrc.trim() 
      ? this._imageSrc 
      : this.imagePlaceholderService.getDoctorPlaceholder();
  }

  @Input() set content(val: string) {
    this._content = val;
  } get content() {
    return this._content;
  }

  @Input() set contentNepali(val: string) {
    this._contentNepali = val;
  } get contentNepali() {
    return this._contentNepali;
  }

  @Input() set department(val: string) {
    this._department = val;
  } get department() {
    return this._department;
  }

  @Input() set departmentNepali(val: string) {
    this._departmentNepali = val;
  } get departmentNepali() {
    return this._departmentNepali;
  }

  @Input() set showBody(val: boolean) {
    this._showBody = val;
  } get showBody() {
    return this._showBody;
  }

  constructor(private imagePlaceholderService: ImagePlaceholderService) { }

  ngOnInit(): void {
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = this.imagePlaceholderService.getDoctorPlaceholder();
  }
}
