import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IServices } from 'src/app/interfaces/service.interface';
import { ServicesService } from 'src/app/services/services.service';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

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

  allServices: IServices[] = [];
  specialistServices: IServices[] = [];
  diagnosticServices: IServices[] = [];

  // Home Page Collapse / Expand States
  showAllSpecialistHome: boolean = false;
  showAllDiagnosticHome: boolean = false;

  // Filter & Search states
  activeTab: 'all' | 'specialist' | 'diagnostic' = 'all';
  searchQuery: string = '';
  filteredSpecialist: IServices[] = [];
  filteredDiagnostic: IServices[] = [];

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
    private router: Router,
    private imagePlaceholderService: ImagePlaceholderService
  ) {}

  ngOnInit(): void {
    this.allServices = this.serviceService.getServices();
    this.specialistServices = this.serviceService.getSpecialistServices();
    this.diagnosticServices = this.serviceService.getDiagnosticServices();
    this.applyFilter();
  }

  get displayedSpecialistHome(): IServices[] {
    return this.showAllSpecialistHome ? this.specialistServices : this.specialistServices.slice(0, 6);
  }

  get displayedDiagnosticHome(): IServices[] {
    return this.showAllDiagnosticHome ? this.diagnosticServices : this.diagnosticServices.slice(0, 6);
  }

  toggleSpecialistHome(): void {
    this.showAllSpecialistHome = !this.showAllSpecialistHome;
  }

  toggleDiagnosticHome(): void {
    this.showAllDiagnosticHome = !this.showAllDiagnosticHome;
  }

  setActiveTab(tab: 'all' | 'specialist' | 'diagnostic'): void {
    this.activeTab = tab;
    this.applyFilter();
  }

  onSearchChange(): void {
    this.applyFilter();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.applyFilter();
  }

  applyFilter(): void {
    const q = this.searchQuery.trim().toLowerCase();

    if (!q) {
      this.filteredSpecialist = [...this.specialistServices];
      this.filteredDiagnostic = [...this.diagnosticServices];
    } else {
      this.filteredSpecialist = this.specialistServices.filter(s =>
        s.title.toLowerCase().includes(q) ||
        (s.titleNepali && s.titleNepali.toLowerCase().includes(q)) ||
        (s.badgeNepali && s.badgeNepali.toLowerCase().includes(q)) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
        (s.badge && s.badge.toLowerCase().includes(q)) ||
        s.content.toLowerCase().includes(q)
      );

      this.filteredDiagnostic = this.diagnosticServices.filter(s =>
        s.title.toLowerCase().includes(q) ||
        (s.titleNepali && s.titleNepali.toLowerCase().includes(q)) ||
        (s.badgeNepali && s.badgeNepali.toLowerCase().includes(q)) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
        (s.badge && s.badge.toLowerCase().includes(q)) ||
        s.content.toLowerCase().includes(q)
      );
    }
  }

  showDetails(index: number): void {
    this.router.navigate(['our-services-details', index]);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getShortExcerpt(text: string, maxLen: number = 115): string {
    if (!text) return '';
    return text.length > maxLen ? text.substring(0, maxLen) + '...' : text;
  }

  getServiceIcon(item: IServices): string {
    return item.icon || 'fa-notes-medical';
  }

  onImageError(event: any): void {
    this.imagePlaceholderService.handleImageError(event, 'gallery');
  }

  getWhatsAppAppointmentLink(serviceTitle: string): string {
    const msg = encodeURIComponent(`Hello Pranjal Healthcare, I would like to inquire/book an appointment for: ${serviceTitle}.`);
    return `https://wa.me/9779864156565?text=${msg}`;
  }
}
