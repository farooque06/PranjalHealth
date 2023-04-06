import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: any[] = [];

  constructor(
    private doctorsService: DoctorsService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.doctors = this.doctorsService.getDoctors();
    
  }
  showDetails(index: number){
    console.log(index);
    this.router.navigate(["doctors-details",index])
  }

}
