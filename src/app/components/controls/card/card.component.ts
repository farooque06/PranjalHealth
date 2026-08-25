import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: false
})
export class CardComponent implements OnInit {
  private _title: string="";
  private _imageSrc: string="";
  private _content:string="";
  private _showBody: boolean = true;

  @Input() set title(val: string){
    this._title = val;
  } get title(){
    return this._title;
  }
  
  @Input() set src(val: string){
    this._imageSrc = val;
  } get src(){
    return this._imageSrc;
  }

  @Input() set content(val: string){
    this._content = val;
  } get content(){
    return this._content;
  }

  @Input() set showBody(val: boolean){
    this._showBody = val;
  }get showBody(){
    return this._showBody;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/home-page/services/ECG.jpg'; // fallback image if path is broken
  }
}
