import { Injectable } from '@angular/core';
import { IGallery } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private gallery: IGallery[] = [
    {
      image: "assets/images/home-page/banner/Building1.jpg",
      title: "Pranjal Healthcare Center Building",
      category: "Infrastructure & Center",
      description: "External view of our multi-story healthcare and diagnostic center in Pepsicola Townplanning, Kathmandu."
    },
    {
      image: "assets/images/gallery/DSC_0153.jpg",
      title: "Automated Biochemistry Analyzer",
      category: "Pathology & Clinical Lab",
      description: "High-precision automated clinical chemistry systems delivering accurate, computerized blood report analysis."
    },
    {
      image: "assets/images/gallery/DSC_0175.jpg",
      title: "Digital Radiography (X-Ray) Suite",
      category: "Radiology & Diagnostics",
      description: "Low-radiation digital radiography unit operated by certified radiographers for instant skeletal and chest imaging."
    },
    {
      image: "assets/images/gallery/DSC_0140.jpg",
      title: "Specialist OPD Consultation Chamber",
      category: "Pharmacy & Consultation",
      description: "Private, hygienic examination room designed for thorough and confidential doctor-patient consultations."
    },
    {
      image: "assets/images/pharmacy/insight.jpg",
      title: "Full-Service On-Site Pharmacy",
      category: "Pharmacy & Consultation",
      description: "Stocked with 100% genuine medicines, wellness supplements, and first aid supplies under registered pharmacist care."
    },
    {
      image: "assets/images/gallery/DSC_0162.jpg",
      title: "High-Resolution Ultrasonography (USG)",
      category: "Radiology & Diagnostics",
      description: "Advanced 4D ultrasound and color Doppler equipment for obstetric, abdominal, and vascular evaluations."
    },
    {
      image: "assets/images/gallery/DSC_0148.jpg",
      title: "Sterile Sample Collection Counter",
      category: "Pathology & Clinical Lab",
      description: "Hygienic, comfortable phlebotomy and sample collection stations ensuring patient safety and sterile handling."
    },
    {
      image: "assets/images/gallery/DSC_0164.jpg",
      title: "Hematology & Cellular Testing Unit",
      category: "Pathology & Clinical Lab",
      description: "Automated cell counters and microscopic stations for complete blood profiles, ESR, and infection screening."
    },
    {
      image: "assets/images/gallery/DSC_0141.jpg",
      title: "Patient Reception & Registration Lounge",
      category: "Infrastructure & Center",
      description: "Welcoming front desk counter with helpful patient coordinators and digitized appointment management."
    },
    {
      image: "assets/images/gallery/DSC_0176.jpg",
      title: "Clinical Diagnostics Equipment Desk",
      category: "Pathology & Clinical Lab",
      description: "Modern laboratory bench equipped for immunoassays, hormonal profiling, and therapeutic monitoring."
    },
    {
      image: "assets/images/home-page/about-section/DSC_0095.jpg",
      title: "Laboratory Diagnostic Facility",
      category: "Pathology & Clinical Lab",
      description: "Overview of our clinical pathology suite functioning with ISO-aligned quality standards and prompt turnaround."
    },
    {
      image: "assets/images/pharmacy/midicine.jpg",
      title: "Genuine Pharmaceutical Inventory",
      category: "Pharmacy & Consultation",
      description: "Carefully stored pharmaceuticals with cold-chain maintenance for vaccines, insulin, and specialized therapeutics."
    },
    {
      image: "assets/images/gallery/gallery6.jpg",
      title: "Senior Consultant OPD Clinic",
      category: "Pharmacy & Consultation",
      description: "Comfortable clinical consultation environment for pediatric, orthopedic, and gynecology patients."
    },
    {
      image: "assets/images/gallery/gallery1.jpg",
      title: "Cardiac Care & ECG Station",
      category: "Radiology & Diagnostics",
      description: "12-lead digital ECG recording unit and echocardiogram facility for rapid cardiovascular assessments."
    },
    {
      image: "assets/images/gallery/gallery3.jpg",
      title: "Microbiology & Culture Sensitivity Lab",
      category: "Pathology & Clinical Lab",
      description: "Sterile testing hoods and incubators for bacterial cultures and antibiotic sensitivity profiling."
    },
    {
      image: "assets/images/gallery/gallery5.jpg",
      title: "Diagnostic Sonography Suite",
      category: "Radiology & Diagnostics",
      description: "Private ultrasound examination bay ensuring patient comfort during antenatal and pelvic scans."
    },
    {
      image: "assets/images/gallery/gallery8.jpg",
      title: "Pathology Quality Control Unit",
      category: "Pathology & Clinical Lab",
      description: "Calibrated testing equipment reviewed regularly by senior consultant pathologists."
    },
    {
      image: "assets/images/gallery/gallery9.jpg",
      title: "Sterile Clinical Atmosphere",
      category: "Infrastructure & Center",
      description: "Clean, sanitized hallways and comfortable patient waiting lounges throughout the building."
    }
  ];

  constructor() {}

  getGallery(): IGallery[] {
    return this.gallery;
  }

  getCategories(): string[] {
    const cats = new Set<string>();
    this.gallery.forEach(item => {
      if (item.category) cats.add(item.category);
    });
    return ['All Photos', ...Array.from(cats)];
  }
}
