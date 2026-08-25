import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IServices } from 'src/app/interfaces/service.interface';
import { ServicesService } from 'src/app/services/services.service';

export interface IHealthPackage {
  title: string;
  badge: string;
  tagline: string;
  recommendedFor: string;
  testsCount: string;
  testsList: string[];
  isPopular?: boolean;
}

@Component({
    selector: 'app-our-services',
    templateUrl: './our-services.component.html',
    styleUrls: ['./our-services.component.scss'],
    standalone: false
})
export class OurServicesComponent implements OnInit {
  @Input() isHomePage: boolean = true;

  services: IServices[] = [];
  displayServices: IServices[] = [];
  filteredServices: IServices[] = [];
  selectedCategory: string = 'All';

  categories: string[] = [
    'All',
    'Pathology & Lab',
    'Radiology & Imaging',
    'Cardiology',
    'Specialized Therapy',
    'Pharmacy & Care'
  ];

  healthPackages: IHealthPackage[] = [
    {
      title: "Basic Health Screening",
      badge: "Routine Care",
      tagline: "Essential vitality check for proactive health monitoring",
      recommendedFor: "Young adults & yearly routine checks",
      testsCount: "18+ Diagnostic Tests",
      testsList: [
        "Complete Blood Count (CBC) with ESR",
        "Fasting Blood Glucose (Sugar)",
        "Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)",
        "Urine Routine & Microscopic Examination",
        "Physician Consultation & Blood Pressure Check"
      ]
    },
    {
      title: "Comprehensive Whole Body Profile",
      badge: "Most Popular",
      tagline: "Total organ health screening with metabolic and thyroid markers",
      recommendedFor: "Adults 30+, sedentary lifestyles, general wellness",
      testsCount: "42+ Diagnostic Tests",
      isPopular: true,
      testsList: [
        "Complete Blood Count (CBC) & ESR",
        "Liver Function Test (LFT: Bilirubin, SGOT, SGPT, Alk Phos)",
        "Renal Function Test (RFT: Urea, Creatinine, Uric Acid)",
        "Comprehensive Lipid Profile & Blood Sugar (F & PP)",
        "Thyroid Stimulating Hormone (TSH)",
        "Urine Routine & Stool Occult Blood",
        "12-Lead Electrocardiogram (ECG)",
        "Senior Physician Health Review"
      ]
    },
    {
      title: "Executive Cardiac Care Package",
      badge: "Heart Health",
      tagline: "In-depth cardiovascular diagnostic evaluation",
      recommendedFor: "Individuals with hypertension, chest discomfort, family history",
      testsCount: "25+ Diagnostic Tests",
      testsList: [
        "12-Lead Digital ECG",
        "4D Echocardiography & Color Doppler",
        "Complete Cardiac Lipid Profile & Risk Ratios",
        "Fasting Blood Sugar & HbA1c (3-Month Sugar)",
        "Kidney Function (Serum Creatinine & Electrolytes)",
        "Chest Digital X-Ray (PA View)",
        "Consultant Cardiologist Evaluation"
      ]
    },
    {
      title: "Senior Citizen Wellness Package",
      badge: "Geriatric Care",
      tagline: "Tailored multi-system health screening for elderly care",
      recommendedFor: "Seniors 55+ for bone, cardiac & metabolic health",
      testsCount: "35+ Diagnostic Tests",
      testsList: [
        "Complete Hematology & ESR",
        "Comprehensive LFT & RFT Panels",
        "Calcium, Vitamin D3 & Uric Acid",
        "Fasting Glucose & HbA1c Profile",
        "Digital Chest X-Ray & 12-Lead ECG",
        "Urine Routine Examination",
        "Personalized Senior Specialist Consultation"
      ]
    }
  ];

  constructor(
    private serviceService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.services = this.serviceService.getServices();
    
    if (this.isHomePage) {
      this.displayServices = this.services.slice(0, 4);
    } else {
      this.displayServices = this.services;
      this.filteredServices = this.services;
    }
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredServices = this.displayServices;
    } else {
      this.filteredServices = this.displayServices.filter(
        s => s.category?.toLowerCase() === category.toLowerCase()
      );
    }
  }

  showDetails(index: number): void {
    this.router.navigate(['our-services-details', index]);
  }

  getShortExcerpt(text: string): string {
    if (!text) return '';
    return text.length > 120 ? text.substring(0, 120) + '...' : text;
  }

  getServiceIcon(index: number): string {
    const service = this.services.find(s => s.index === index);
    if (service && service.icon) {
      return service.icon;
    }
    const fallbackIcons = [
      'fa-flask-vial',
      'fa-x-ray',
      'fa-heart-pulse',
      'fa-wave-square',
      'fa-heart',
      'fa-person-walking',
      'fa-pills'
    ];
    return fallbackIcons[index % fallbackIcons.length] || 'fa-notes-medical';
  }
}
