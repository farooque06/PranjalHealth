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
      title: "Prof. Dr. Meena Thapa ",
      image: "assets/images/home-page/doctors-image/minaThapa.jpg",
      content: "Sr. Consultant Obstetrics & Gynaecologist",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS , MD (TUTH)" ]
    })
    this.doctors.push({
      index: 1,
      title: "Dr. Suman Baral",
      image: "assets/images/home-page/doctors-image/sumanBaral.jpg",
      content: "Sr. Consultant Endocrinologist & Physician ",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS , MD, MRCP (UK)"]
    })
    this.doctors.push({
      index: 2,
      title: " Dr. Bipendra D.K Rai",
      image: "assets/images/home-page/doctors-image/Dependra.png",
      content: "Sr. Consultant Urologist",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","lllllllll","kkkkkkkk"],
      education:["MBBS, MS, Mch(Urology)"]
    })

    this.doctors.push({
      index: 3,
      title: "Dr. Suresh Thapa",
      image: "assets/images/home-page/doctors-image/Suresh1.png",
      content: "Sr. Consultant Orthopedic Surgen",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","lllllllll","kkkkkkkk"],
      education:["MBBS, MS"]
    })
    
    this.doctors.push({
      index: 4,
      title: " Assoc. Prof.Dr. Rakesh Pathak",
      image: "assets/images/home-page/doctors-image/doctor2.png",
      content: "Sr. Consultant Pathologist",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","lllllllll","kkkkkkkk"],
      education:["MBBS, MD (TUTH, IOM)"]
    })
    this.doctors.push({
      index: 5,
      title: "Dr. Basudev Karki",
      image: "assets/images/home-page/doctors-image/basudev.png",
      content: "Senior Consultant Psychatrist",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS, MD(PSYCHIATRY), NAMS"]
    })
    this.doctors.push({
      index: 6,
      title: "Assoc. Prof .Dr. Shreyashi Aryal",
      image: "assets/images/home-page/doctors-image/sheryaCaryal.jpg",
      content: "Consultant Obstetrics & Gynaecologist Laparoscopic Surgen",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","kscckjsackjnann janxlkanxna "],
      education:["MBBS, MD(KU)"]
    })
    this.doctors.push({
      index: 7,
      title: "DR. Sabindra Bhupal Malla",
      image: "assets/images/home-page/doctors-image/sabindraGopal.jpg",
      content: "Consultant Physician Cardiologist",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","aaaaaa","dfsmnas ckjanckjas cjnsa c"],
      education:["MBBS. MD CARDIO. Dhaka Bangladesh)"]
    })
    this.doctors.push({
      index: 8,
      title: "Dr. Ankit Niraula",
      image: "assets/images/home-page/doctors-image/ankit.png",
      content: "Consultant Orthopedic Surgeon",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","aaaaaa","dfsmnas ckjanckjas cjnsa c"],
      education:["MBBS, MS(TUTH,IOM)"]
    })
    this.doctors.push({
      index: 9,
      title: "Dr. Sudarshan Koirala",
      image: "assets/images/home-page/doctors-image/sudarshankoirala.jpg ",
      content: "Consultant Pediatrician",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja","ueefbafebac"],
      education:["MBBS MD, (TUTH, IOM)"]
    })
    this.doctors.push({
      index: 10,
      title: "Dr. Saroj Ghimire",
      image: "assets/images/home-page/doctors-image/sarojGhimere.jpg",
      content: "Internal Medicine Consultant Physician",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS, (KU), MD (BPHKS)"]
    })
    this.doctors.push({
      index: 11,
      title: "Dr. Prajwal Dhakal ",
      image: "assets/images/home-page/doctors-image/prajwal1.jpg",
      content: "Consuitant Radiologist",
      // experience:["lhk nfxabna hvxjhbx", "kkjndjbcnscckl ", "asyugchfcjv","wexhbjhbbyc ","jhbhudvjbas chasbsx vaxhax hhgjhghghghgh"],
      education:["MBBS (KU). MD RADIO DIAGNOSIS"]
    })
    this.doctors.push({
      index: 12,
      title: "Dr. Manisha Paneru",
      image: "assets/images/home-page/doctors-image/manishaPaneru.jpg",
      content: "Consultant ENT Surgeon",
      // experience:["abcd ", "ijklsnn", "wertyhjbvcxsg","ctrfgvbyuhj"],
      education:["MBBS (KU), MS( (BPKHS)"]
    })
    this.doctors.push({
      index: 13,
      title: "Dr. Chandrika Sah",
      image: "assets/images/home-page/doctors-image/chandrikasah.jpg",
      content: "Consultant General & Laproscopic Surgeon",
      // experience:["abcd ", "ijklsnn", "wertyhjbvcxsg","ctrfgvbyuhj"],
      education:["MBBS, MS (KU)"]
    })
    this.doctors.push({
      index: 14,
      title: "Dr. Sagar G.C.",
      image: "assets/images/home-page/doctors-image/sagar.png",
      content: "Consultant Dermatologist",
      // experience:["abcd ", "ijklsnn", "wertyhjbvcxsg","ctrfgvbyuhj"],
      education:["MBBS (TU), MD (KU)"]
    })
    this.doctors.push({
      index: 15,
      title: "Dr. Himal Khanal",
      image: "assets/images/home-page/doctors-image/himalKhanal.jpg",
      content: "Consultant Orthopedic Surgeon",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS. MS(KU)"]
    })
    this.doctors.push({
      index: 16,
      title: "Dr. Anupa Khadka",
      image: "assets/images/home-page/doctors-image/anupakhadka.jpg",
      content: "Consultant Dermatologist & Vyenerologist",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS (TU), MD (KU)"]
    })
    this.doctors.push({
      index: 17,
      title: "Dr. Mohit Raj Dahal",
      image: "assets/images/home-page/doctors-image/mohitDahal.jpg",
      content: "Consultant Radiologist",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS, MD RADIO DIAGNOSIS & IMAGING (KUSMS, DHULIKHEL)"]
    })
    this.doctors.push({
      index: 18,
      title: "Dr. Kundan Raj Pandey",
      image: "assets/images/home-page/doctors-image/doctor.png",
      content: "Consultant Physician",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS.MD (TUTH)"]
    })

    this.doctors.push({
      index: 19,
      title: "Dr. Elisha Bhattarai",
      image: "assets/images/home-page/doctors-image/doctor.png",
      content: "Consultant Dermatologist & Venerologist",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS , MD (KU)"]
    })

    this.doctors.push({
      index: 20,
      title: "Dr. Suman Adhikari",
      image: "assets/images/home-page/doctors-image/doctor.png",
      content: "Consultant ENT Surgeon",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MBBS.MS (KU)"]
    })
    this.doctors.push({
      index: 21,
      title: "Dr. Ujjwal Dotel",
      image: "assets/images/home-page/doctors-image/doctor.png",
      content: "Consultant PHYSIOTHERAPIST",
      // experience:["kjkajskdjkf", "kajsdkfjk ", "askdjkfja"],
      education:["MPT (MSK & SPORTS PHYSIOTHERAPY)"]
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
