import { Injectable } from '@angular/core';
import { IServices } from '../interfaces/service.interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services: IServices[] = [];

  constructor() {
    this.services.push({
      index: 0,
      title: "Pathology Lab ",
      image: ["assets/images/home-page/services/service1.jpg","assets/images/home-page/services/service1.jpg"],
      content: "Pranjal provides series of laboratory services that includes manual and automated clinical chemistry analysis and microbiology test. Routine chemistry test, therapeutic drug monitoring and immunoassay, Biochemical tests, culture sensitivity, staining procedures, Microscopy, Stool occult blood, Blood for Malaria parasites (PS and QBC) and microfilaria, Bone marrow/splenic aspirate for LD bodies, Optimal, rk39, DAT, and a wide range of immunological services for different diseases are performed.",
    })
    this.services.push({
      index: 1,
      title: "Digital X-Rays",
      image: ["assets/images/home-page/services/digitalXray.jpg"],
      content: "i am content of pathology Digital X-Rays Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt autempossimus! Odit, eos accusamus"
    })
    this.services.push({
      index: 2,
      title: "Echocardiogram",
      image: ["assets/images/home-page/services/eco.jpg"],
      content: "Physiotherapy and rehabilitation, Speech Therapy, Yoga clinic and De-addiction clinics are also functioning at Pranjal. We provide efficient manpower and expert consultants and experienced staffs for the physiotherapy."
    })
    this.services.push({
      index: 3,
      title: "Ultrasonography (USG)",
      image: ["assets/images/home-page/services/ultraSono2.jpg"],
      content: "Pranjal provides series of laboratory services that includes manual and automated clinical chemistry analysis and microbiology test. Routine chemistry test, therapeutic drug monitoring and immunoassay, Biochemical tests, culture sensitivity, staining procedures, Microscopy, Stool occult blood, Blood for Malaria parasites (PS and QBC) and microfilaria, Bone marrow/splenic aspirate for LD bodies, Optimal, rk39, DAT, and a wide range of immunological services for different diseases are performed.",
    })
    this.services.push({
      index: 4,
      title: "ECG",
      image: ["assets/images/home-page/services/ECG.jpg"],
      content: "i am content of Digital X-Rays Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt autempossimus! Odit, eos accusamus"
    })
    this.services.push({
      index: 5,
      title: "Physiotherapy",
      image: ["assets/images/home-page/services/physio.jpg"],
      content: "Physiotherapy and rehabilitation, Speech Therapy, Yoga clinic and De-addiction clinics are also functioning at Pranjal. We provide efficient manpower and expert consultants and experienced staffs for the physiotherapy."
    })
    this.services.push({
      index: 6,
      title: "Pharmacy",
      image: ["assets/images/home-page/services/pharmacy.jpg"],
      content: "Pranjal provides series of laboratory services that includes manual and automated clinical chemistry analysis and microbiology test. Routine chemistry test, therapeutic drug monitoring and immunoassay, Biochemical tests, culture sensitivity, staining procedures, Microscopy, Stool occult blood, Blood for Malaria parasites (PS and QBC) and microfilaria, Bone marrow/splenic aspirate for LD bodies, Optimal, rk39, DAT, and a wide range of immunological services for different diseases are performed.",
    })
  }
  getServices(length: number = 0) {
    if (!length) {
      return this.services;
    } else {
      return this.services.filter(x => x.index < length)
    }
  }

  getServiceByIndexNo(index: number){
    return this.services.find(x=>x.index === index);
  }


}
