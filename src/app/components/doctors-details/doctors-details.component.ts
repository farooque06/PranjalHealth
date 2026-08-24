import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoctors } from 'src/app/interfaces/service.interface';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.scss']
})
export class DoctorsDetailsComponent implements OnInit {
data: IDoctors | any;
  constructor(
    private activateRoute:ActivatedRoute,
    private doctors:DoctorsService
  ) { }

  ngOnInit(): void {
    const index = this.activateRoute.snapshot.paramMap.get("index");
    if(index){
      this.data= this.doctors.getDoctorBYIndexNO(+index);

      // console.log(this.data.experience)
      console.log(this.data.education)
    }
  }

}
