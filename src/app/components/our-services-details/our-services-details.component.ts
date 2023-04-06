import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IServices } from 'src/app/interfaces/service.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-our-services-details',
  templateUrl: './our-services-details.component.html',
  styleUrls: ['./our-services-details.component.scss']
})
export class OurServicesDetailsComponent implements OnInit {


  data: IServices | any;


  constructor(
    private activateRoute: ActivatedRoute,
    private service: ServicesService
  ) { }

  ngOnInit(): void {
    const index = this.activateRoute.snapshot.paramMap.get("index");
    if(index){
      this.data= this.service.getServiceByIndexNo(+index);
    }

  }

}
