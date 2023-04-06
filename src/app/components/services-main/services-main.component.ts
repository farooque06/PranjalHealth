import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss']
})
export class ServicesMainComponent implements OnInit {
  services: any[] = [];

  constructor(
    private servicesservice: ServicesService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.services =this.servicesservice.getServices();

  }
  showDetails(index: number){
      console.log(index);
      this.router.navigate(["our-services-details", index])
    }
}
