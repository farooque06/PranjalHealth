import { Injectable } from '@angular/core';
import { IDoctors } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private doctors: IDoctors[] = [];
  constructor() {
    this.doctors.push({
      index: 0,
      title: "Dr. Mina Thapa ",
      image: "assets/images/home-page/doctors-image/minathapa.png",
      content: "MD Paediatrics",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 1,
      title: "Dr. Suman Baral",
      image: "assets/images/home-page/doctors-image/sumanbaral.png",
      content: "Consultant Orthopedic Surgeon",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 2,
      title: "Dr. Bikash Bikram Thapa",
      image: "assets/images/home-page/doctors-image/bikashbikram.png",
      content: "Physician & Pulmonologist",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","lllllllll","kkkkkkkk"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 3,
      title: "Dr. Basudev Karki",
      image: "assets/images/home-page/doctors-image/basudev.png",
      content: "Pathologist",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 4,
      title: "Dr. Shreyashi Aryal",
      image: "assets/images/home-page/doctors-image/shreyashi.png",
      content: "MD Paediatrics",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","kscckjsackjnann janxlkanxna "],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 5,
      title: "Dr. Ankit Niraula",
      image: "assets/images/home-page/doctors-image/ankit.png",
      content: "Consultant Orthopedic Surgeon",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","aaaaaa","dfsmnas ckjanckjas cjnsa c"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 6,
      title: "Dr. Sudarshan Koirala",
      image: "assets/images/home-page/doctors-image/sudarshan.png",
      content: "Physician & Pulmonologist",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","ueefbafebac"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 7,
      title: "Dr. Santosh Pokharel",
      image: "assets/images/home-page/doctors-image/santosh.png",
      content: "Pathologist",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 8,
      title: "Dr. Prajwal Dhakal ",
      image: "assets/images/home-page/doctors-image/prajwal.png",
      content: "MD Paediatrics",
      experience:["lhk nfxabna hvxjhbx", "kkjndjbcnscckl ", "asyugchfcjv","wexhbjhbbyc ","jhbhudvjbas chasbsx vaxhax hhgjhghghghgh"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 9,
      title: "Dr. Sagar G.C.",
      image: "assets/images/home-page/doctors-image/sagar.png",
      content: "Consultant Orthopedic Surgeon",
      experience:["abcd ", "ijklsnn", "wertyhjbvcxsg","ctrfgvbyuhj"],
      education:["MSD","MD","MBBS"]
    })
    this.doctors.push({
      index: 10,
      title: "Dr. Himal Khanal",
      image: "assets/images/home-page/doctors-image/himal.png",
      content: "Physician & Pulmonologist",
      experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MSD","MD","MBBS"]
    })
  }

  getDoctors( length: number = 0) {
    if (!length){
      return this.doctors;
    }else{
      return this.doctors.filter(x => x.index < length)
    }
  }
  getDoctorBYIndexNO(index: number){
    return this.doctors.find(x=>x.index ===index);
  }


}
