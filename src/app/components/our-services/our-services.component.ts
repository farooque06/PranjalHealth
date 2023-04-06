import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  source: any = null;
  services: any[] = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private servicesservice:ServicesService
  ) { }

  ngOnInit(): void {
   
   
    this.services =this.servicesservice.getServices(3);



    this.activateRoute.data.subscribe((data: any) => {
      this.source = data.source;
    })

  }

  showDetails(index: number){
  //  console.log(index);
    this.router.navigate(["our-services-details",index])
  }

}
