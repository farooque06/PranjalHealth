import { Component, OnInit } from '@angular/core';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
    standalone: false
})
export class AboutPageComponent implements OnInit {

  constructor(
    private imagePlaceholderService: ImagePlaceholderService,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'About Pranjal Healthcare | Best Diagnostic Center in Kathmandu',
      description: 'Learn about Pranjal Diagnostic & Healthcare Center Pvt. Ltd. Founded in Pepsicola, Kathmandu to deliver accurate automated pathology, digital X-Ray, USG, and expert OPD care.',
      keywords: 'about Pranjal Healthcare, best clinic Kathmandu, diagnostic center Pepsicola, trusted lab Nepal, medical clinic Kathmandu',
      url: '/about-us'
    });
  }

  activeFacility: number = 0;

  facilities = [
    {
      id: 'pathology',
      tabLabel: 'Pathology Lab',
      tabIcon: 'fa-solid fa-flask-vial',
      badge: 'Diagnostic Wing',
      title: 'Automated Clinical Pathology',
      desc: 'Our diagnostic lab features automated biochemistry, hematology, and hormone analyzers, delivering high-precision results for blood profiles, kidney/liver panels, lipid profiles, and specialized immunoassays.',
      tag: 'Same-Day Results',
      tagIcon: 'fa-solid fa-bolt',
      image: 'assets/images/home-page/services/service1.jpg',
      link: '/services-main'
    },
    {
      id: 'xray',
      tabLabel: 'Digital X-Ray',
      tabIcon: 'fa-solid fa-x-ray',
      badge: 'Imaging Wing',
      title: 'High-Definition Digital X-Ray',
      desc: 'Equipped with low-radiation digital radiography systems that produce ultra-clear skeletal, chest, and orthopedic images instantly, analyzed by expert radiologists for precise diagnostic reporting.',
      tag: 'Low-Radiation Tech',
      tagIcon: 'fa-solid fa-shield',
      image: 'assets/images/home-page/services/digitalXray.jpg',
      link: '/services-main'
    },
    {
      id: 'usg',
      tabLabel: 'USG & Doppler',
      tabIcon: 'fa-solid fa-wave-square',
      badge: 'Radiology Wing',
      title: 'Ultrasonography (USG) & Doppler',
      desc: 'Modern ultrasound machines operated by skilled sonologists for abdominal, pelvic, obstetrics, pregnancy scans, small parts, and vascular Doppler studies with exceptional clarity.',
      tag: 'Specialist Sonologist',
      tagIcon: 'fa-solid fa-user-nurse',
      image: 'assets/images/home-page/services/ultraSono2.jpg',
      link: '/services-main'
    },
    {
      id: 'opd',
      tabLabel: 'Specialist OPD',
      tabIcon: 'fa-solid fa-user-doctor',
      badge: 'Consultation Wing',
      title: 'Multi-Specialty OPD Consultations',
      desc: 'Daily outpatient clinics featuring senior consultants across Cardiology, Gynecology & Obstetrics, Pediatrics, Orthopedics, ENT, Dermatology, and General Internal Medicine.',
      tag: 'Daily OPD Available',
      tagIcon: 'fa-solid fa-calendar-check',
      image: 'assets/images/gallery/gallery6.jpg',
      link: '/doctors'
    },
    {
      id: 'pharmacy',
      tabLabel: 'Pharmacy',
      tabIcon: 'fa-solid fa-pills',
      badge: 'Pharmacy Wing',
      title: 'Full-Service On-Site Pharmacy',
      desc: 'Stocked with 100% genuine pharmaceuticals, life-saving medicines, surgical supplies, and health supplements under the supervision of qualified registered pharmacists.',
      tag: 'Genuine Medicines',
      tagIcon: 'fa-solid fa-circle-check',
      image: 'assets/images/pharmacy/insight.jpg',
      link: '/services-main'
    },
    {
      id: 'cardiac',
      tabLabel: 'Cardiac Care',
      tabIcon: 'fa-solid fa-heart-pulse',
      badge: 'Cardiac & Wellness',
      title: 'ECG, Echocardiography & Checkups',
      desc: 'Comprehensive cardiovascular evaluations including 12-lead ECG, Echo, and tailored whole-body preventive health checkup packages designed for proactive lifestyle disease prevention.',
      tag: 'Preventive Care',
      tagIcon: 'fa-solid fa-shield-heart',
      image: 'assets/images/home-page/services/ECG.jpg',
      link: '/services-main'
    }
  ];

  setFacility(index: number): void {
    this.activeFacility = index;
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'generic');
  }

}
