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
      title: "Automated Pathology Lab",
      subtitle: "State-of-the-art Clinical Biochemistry, Hematology & Microbiology",
      category: "Pathology & Lab",
      icon: "fa-flask-vial",
      turnaround: "Same-Day (2 - 4 Hours)",
      image: [
        "assets/images/home-page/services/service1.jpg"
      ],
      content: "Pranjal Diagnostic & Healthcare Center provides an extensive series of laboratory diagnostic services using fully automated clinical chemistry and hematology analyzers. Our pathology unit conducts routine and specialized tests with stringent internal quality controls to ensure 99.8% precision. Testing covers routine hematology, lipid profiles, liver and renal function panels, thyroid profiles, therapeutic drug monitoring, immunoassays, culture sensitivity, stool occult blood, microscopic evaluations, and diagnostic antibody testing.",
      preparation: "For fasting blood profiles (Lipid Profile, Fasting Blood Sugar, Thyroid), a 10-12 hour overnight fast is recommended. Water intake is permitted.",
      features: [
        "Fully Automated Biochemistry & Hematology Analyzers",
        "Hormonal Assays, Thyroid & Tumor Markers",
        "Microbiology, Culture & Antibiotic Sensitivity Testing",
        "Comprehensive Renal, Liver & Lipid Metabolic Panels",
        "Digitally Signed Reports with WhatsApp & Online Access"
      ],
      benefits: [
        "Minimal wait times with fast barcoded sample tracking",
        "Highest precision certified by clinical pathologists",
        "Affordable routine screening and wellness panel bundles"
      ]
    });

    this.services.push({
      index: 1,
      title: "Digital X-Ray Radiography",
      subtitle: "High-Definition, Low-Radiation Digital Skeletal & Chest Imaging",
      category: "Radiology & Imaging",
      icon: "fa-x-ray",
      turnaround: "Instant Film & Report (30 Mins)",
      image: [
        "assets/images/home-page/services/digitalXray.jpg"
      ],
      content: "Our radiology wing is equipped with high-frequency digital X-Ray technology that drastically minimizes radiation exposure while delivering crystal-clear images of the chest, spine, extremities, and joints. High-resolution digital radiography facilitates accurate, immediate diagnosis of fractures, infections, pulmonary conditions, and degenerative bone disorders by experienced consultant radiologists.",
      preparation: "No special fasting required. Patients will be asked to remove metallic jewelry, belts, and accessories before imaging.",
      features: [
        "Ultra-low radiation dosage for maximum patient safety",
        "High-contrast digital imaging for minute fracture detection",
        "Chest, spine, pelvic, cranial & extremity radiography",
        "Instant digital PACS image review and physical film delivery"
      ],
      benefits: [
        "Quick scan time — completed in under 5 minutes",
        "Immediate report availability for orthopedic & general OPDs",
        "Clean, spacious, and patient-friendly imaging suite"
      ]
    });

    this.services.push({
      index: 2,
      title: "4D Echocardiography",
      subtitle: "Comprehensive Cardiovascular Ultrasound & Doppler Assessment",
      category: "Cardiology",
      icon: "fa-heart-pulse",
      turnaround: "Instant with Cardiologist Review",
      image: [
        "assets/images/home-page/services/eco.jpg"
      ],
      content: "Echocardiography (Echo) is a non-invasive ultrasound examination of the heart chambers, valves, and surrounding blood vessels. Operated by expert cardiologists, our modern color Doppler ultrasound evaluates heart muscle pumping efficiency (ejection fraction), valvular heart disease, congenital heart defects, and post-infarction myocardial health with exceptional anatomical clarity.",
      preparation: "No prior fasting needed. Wear comfortable two-piece clothing for easy chest probe placement.",
      features: [
        "Transthoracic 2D/4D Color Doppler Echocardiogram",
        "Heart Chamber Dimension & Ejection Fraction Calculation",
        "Heart Valve Function, Stenosis & Regurgitation Detection",
        "Conducted and analyzed directly by Senior Cardiologists"
      ],
      benefits: [
        "Completely safe, non-invasive, and radiation-free",
        "Critical for hypertensive, diabetic, and cardiac patients",
        "Immediate consultation and treatment guidance available"
      ]
    });

    this.services.push({
      index: 3,
      title: "Ultrasonography (USG)",
      subtitle: "High-Resolution 3D/4D Diagnostic Ultrasound & Color Doppler",
      category: "Radiology & Imaging",
      icon: "fa-wave-square",
      turnaround: "Report within 30 - 45 Minutes",
      image: [
        "assets/images/home-page/services/ultraSono2.jpg"
      ],
      content: "Pranjal’s ultrasonography unit utilizes advanced imaging technology operated by certified sonologists. We offer diagnostic scans covering the whole abdomen, pelvis, obstetric/pregnancy monitoring, breast ultrasound, thyroid, scrotal, and peripheral vascular Doppler studies. High acoustic sensitivity ensures clear visualization of soft tissues and internal organs.",
      preparation: "For Abdomen/Pelvis scans: 6-8 hours fasting and a full bladder (drink 3-4 glasses of water 1 hour prior) is required.",
      features: [
        "Routine Abdomen & Pelvic Ultrasound",
        "Obstetric & Pregnancy Wellbeing Scans (Growth, Anomaly)",
        "Thyroid, Breast, Scrotal & Soft Tissue USG",
        "Color Doppler Vascular Studies (Arterial & Venous)"
      ],
      benefits: [
        "Accurate detection of gallstones, kidney stones, and cysts",
        "Safe, painless procedure with zero ionizing radiation",
        "Warm, comfortable private screening environment"
      ]
    });

    this.services.push({
      index: 4,
      title: "12-Lead Electrocardiogram (ECG)",
      subtitle: "Rapid Cardiac Rhythm & Electrical Conduction Analysis",
      category: "Cardiology",
      icon: "fa-heart",
      turnaround: "Immediate (10 - 15 Minutes)",
      image: [
        "assets/images/home-page/services/ECG.jpg"
      ],
      content: "A 12-lead Electrocardiogram (ECG) is a primary and vital diagnostic tool for evaluating the electrical activity of the heart. It swiftly detects cardiac arrhythmias, myocardial ischemia, past or impending heart attacks, conduction blocks, and electrolyte-induced rhythm changes. Our ECG unit provides rapid baseline recordings for routine checks and pre-operative clearances.",
      preparation: "No fasting required. Avoid applying greasy body lotions or oils to the chest area prior to the test.",
      features: [
        "High-sensitivity 12-lead digital ECG recording",
        "Instant rhythm strip analysis for arrhythmia detection",
        "Pre-operative, routine, and emergency cardiac screening",
        "Cardiologist interpretation and immediate prescription review"
      ],
      benefits: [
        "Fast 5-minute painless recording",
        "Early warning detection for chest discomfort and palpitations",
        "Affordable vital checkup for all adults"
      ]
    });

    this.services.push({
      index: 5,
      title: "Physiotherapy & Rehabilitation",
      subtitle: "Advanced Pain Management, Post-Surgical & Neuro Rehabilitation",
      category: "Specialized Therapy",
      icon: "fa-person-walking",
      turnaround: "Daily & Custom Session Schedules",
      image: [
        "assets/images/home-page/services/physio.jpg"
      ],
      content: "Our Physiotherapy and Rehabilitation unit is staffed by experienced physiotherapists providing customized therapeutic interventions for chronic back/neck pain, joint arthritis, stroke rehabilitation, sports injuries, post-fracture stiffness, and ergonomic posture correction. Using modern electrotherapy (IFT, TENS, Ultrasound), traction, and manual therapy, we help patients regain mobility and live pain-free.",
      preparation: "Wear comfortable, loose workout or athletic clothing that allows ease of movement during physical therapy.",
      features: [
        "Electrotherapy, Ultrasonic Therapy & Cervical/Lumbar Traction",
        "Manual Joint Mobilization & Deep Tissue Therapy",
        "Post-Operative Orthopedic & Joint Replacement Rehabilitation",
        "Neurological & Stroke Recovery Exercise Regimens"
      ],
      benefits: [
        "Natural, drug-free pain relief and functional restoration",
        "Personalized one-on-one attention from licensed therapists",
        "Flexible morning and evening appointment slots"
      ]
    });

    this.services.push({
      index: 6,
      title: "Full-Service On-Site Pharmacy",
      subtitle: "100% Genuine Pharmaceuticals, Health Supplements & Medical Supplies",
      category: "Pharmacy & Care",
      icon: "fa-pills",
      turnaround: "Instant Dispensing",
      image: [
        "assets/images/pharmacy/insight.jpg"
      ],
      content: "Pranjal’s in-house pharmacy offers a complete inventory of certified, authentic prescription medications, pediatric and geriatric formulations, first aid supplies, surgical consumables, and wellness supplements. Supervised by qualified registered pharmacists, we ensure proper drug storage temperatures, dosage counseling, and patient safety guidance.",
      preparation: "Please present a valid doctor's prescription for scheduled and prescription-only medications.",
      features: [
        "Comprehensive stock of genuine pharmaceutical brands",
        "Proper cold-chain storage for vaccines and insulin",
        "Qualified pharmacist dosage and drug-interaction counseling",
        "Health monitoring devices (BP monitors, Glucometers, Oximeters)"
      ],
      benefits: [
        "Convenient immediate access right after doctor consultation",
        "Authentic medicines guaranteed at transparent, regulated prices",
        "Friendly and knowledgeable pharmacist assistance"
      ]
    });
  }

  getServices(length: number = 0): IServices[] {
    if (!length) {
      return this.services;
    } else {
      return this.services.filter(x => x.index < length);
    }
  }

  getServiceByIndexNo(index: number): IServices | undefined {
    return this.services.find(x => x.index === index);
  }
}
