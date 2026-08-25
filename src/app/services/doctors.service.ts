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
      title: "Prof. Dr. Meena Thapa",
      image: "assets/images/home-page/doctors-image/minaThapa.jpg",
      content: "Senior Consultant Obstetrician & Gynecologist",
      department: "Gynecology & Obstetrics",
      education: ["MBBS", "MD (Obstetrics & Gynecology, TUTH, IOM)"],
      opdSchedule: "Mon, Wed, Fri (4:00 PM - 6:30 PM)",
      rating: 5.0,
      specializations: [
        "High-Risk Pregnancy Management",
        "Infertility & Reproductive Health",
        "Laparoscopic & Hysteroscopic Surgeries",
        "Menopausal Care & Gynecological Oncology Screening"
      ],
      experience: [
        "Former Professor & Unit Head at Tribhuvan University Teaching Hospital (TUTH)",
        "Over 25+ years of extensive clinical and surgical experience in maternal & fetal medicine"
      ],
      bio: "Prof. Dr. Meena Thapa is a widely respected pioneer in obstetrics and gynecology in Nepal. With decades of academic and surgical leadership at TUTH, she provides compassionate, evidence-based care for high-risk pregnancies, infertility, and complex women's health conditions."
    });

    this.doctors.push({
      index: 1,
      title: "Dr. Suman Baral",
      image: "assets/images/home-page/doctors-image/sumanBaral.jpg",
      content: "Senior Consultant Endocrinologist & Physician",
      department: "Internal Medicine & Endocrinology",
      education: ["MBBS", "MD (Internal Medicine)", "MRCP (UK - Endocrinology)"],
      opdSchedule: "Sun, Tue, Thu (5:00 PM - 7:00 PM)",
      rating: 4.9,
      specializations: [
        "Type 1 & Type 2 Diabetes Management",
        "Thyroid Disorders & Goiter Management",
        "Obesity, Metabolic Syndrome & Lipid Disorders",
        "Pituitary & Adrenal Gland Conditions"
      ],
      experience: [
        "Fellowship and MRCP accreditation in Endocrinology from Royal College of Physicians (UK)",
        "Over 16+ years of clinical consultation in diabetes and endocrine metabolic disorders"
      ],
      bio: "Dr. Suman Baral is a leading consultant endocrinologist specializing in comprehensive diabetes care, hormonal balancing, and advanced metabolic disease management with a patient-centric therapeutic approach."
    });

    this.doctors.push({
      index: 2,
      title: "Dr. Bipendra D.K Rai",
      image: "assets/images/home-page/doctors-image/Dependra.png",
      content: "Senior Consultant Urologist & Renal Transplant Surgeon",
      department: "Urology & Kidney Care",
      education: ["MBBS", "MS (General Surgery)", "MCh (Urology)"],
      opdSchedule: "Tue, Thu, Sat (4:30 PM - 6:30 PM)",
      rating: 4.9,
      specializations: [
        "Kidney & Ureteral Stone Management (PCNL, URSL)",
        "Prostate Enlargement (BPH & Laser Surgery)",
        "Uro-Oncology & Bladder Tumors",
        "Male Infertility & Andrology"
      ],
      experience: [
        "MCh specialized urology training with high volume endoscopic surgical caseloads",
        "Over 14+ years providing advanced laser urology and minimally invasive renal surgeries"
      ],
      bio: "Dr. Bipendra D.K Rai brings state-of-the-art diagnostic and surgical expertise in urology, offering cutting-edge endoscopic solutions for kidney stones, prostate disorders, and urinary tract wellness."
    });

    this.doctors.push({
      index: 3,
      title: "Dr. Suresh Thapa",
      image: "assets/images/home-page/doctors-image/Suresh1.png",
      content: "Senior Consultant Orthopedic & Joint Replacement Surgeon",
      department: "Orthopedics & Spine Care",
      education: ["MBBS", "MS (Orthopedics & Trauma Surgery)"],
      opdSchedule: "Sun to Fri (3:00 PM - 5:30 PM)",
      rating: 4.8,
      specializations: [
        "Total Knee & Hip Replacement Surgeries",
        "Complex Trauma & Fracture Reconstruction",
        "Arthroscopic Knee & Shoulder Surgeries",
        "Degenerative Joint Arthritis & Osteoporosis"
      ],
      experience: [
        "Chief consultant orthopedic surgeon with thousands of successful joint surgeries",
        "Over 18+ years of dedicated service in orthopedic trauma and reconstructive care"
      ],
      bio: "Dr. Suresh Thapa is a distinguished orthopedic surgeon known for his clinical excellence in trauma stabilization, robotic/arthroscopic joint preservation, and personalized mobility restoration."
    });

    this.doctors.push({
      index: 4,
      title: "Assoc. Prof. Dr. Rakesh Pathak",
      image: "assets/images/home-page/doctors-image/doctor2.png",
      content: "Senior Consultant Pathologist & Lab Director",
      department: "Pathology & Laboratory Medicine",
      education: ["MBBS", "MD (Pathology, TUTH, IOM)"],
      opdSchedule: "Daily (8:00 AM - 4:00 PM)",
      rating: 5.0,
      specializations: [
        "Histopathology & Cytopathology (FNAC & Biopsy)",
        "Hematology & Bone Marrow Aspiration Studies",
        "Clinical Chemistry Quality Assurance & Calibration",
        "Immunoassays & Tumor Marker Analysis"
      ],
      experience: [
        "Associate Professor of Pathology at prestigious medical institutes",
        "Over 15+ years overseeing clinical lab certifications, diagnostic quality control and cytology"
      ],
      bio: "Assoc. Prof. Dr. Rakesh Pathak directs the pathology department at Pranjal Healthcare, ensuring every laboratory specimen is examined under stringent ISO-aligned diagnostic protocols."
    });

    this.doctors.push({
      index: 5,
      title: "Dr. Basudev Karki",
      image: "assets/images/home-page/doctors-image/basudev.png",
      content: "Senior Consultant Psychiatrist & Neuropsychiatrist",
      department: "Psychiatry & Mental Health",
      education: ["MBBS", "MD (Psychiatry, NAMS)"],
      opdSchedule: "Sun, Wed, Fri (4:00 PM - 6:00 PM)",
      rating: 4.9,
      specializations: [
        "Anxiety, Depression & Mood Disorders",
        "De-addiction & Substance Rehabilitation",
        "Psychosomatic Disorders & Stress Therapy",
        "Child & Adolescent Behavioral Health"
      ],
      experience: [
        "Senior consultant at national mental health institutes",
        "Over 13+ years providing psychiatric consultations, counseling, and psychotherapy"
      ],
      bio: "Dr. Basudev Karki provides confidential, empathetic mental health care, specializing in holistic treatment for mood conditions, sleep disorders, addiction recovery, and cognitive wellness."
    });

    this.doctors.push({
      index: 6,
      title: "Assoc. Prof. Dr. Shreyashi Aryal",
      image: "assets/images/home-page/doctors-image/sheryaCaryal.jpg",
      content: "Consultant Obstetrician, Gynecologist & Laparoscopic Surgeon",
      department: "Gynecology & Obstetrics",
      education: ["MBBS", "MD (Obstetrics & Gynecology, KU)"],
      opdSchedule: "Sun, Tue, Thu (3:00 PM - 5:30 PM)",
      rating: 4.9,
      specializations: [
        "Minimally Invasive Laparoscopic Gynecological Surgery",
        "Antenatal & Postnatal Maternal Care",
        "PCOS / PCOD & Adolescent Gynecological Issues",
        "Uterine Fibroids & Ovarian Cyst Management"
      ],
      experience: [
        "Associate Professor mentoring upcoming medical specialists",
        "Over 12+ years of clinical consultation and laparoscopic procedures"
      ],
      bio: "Dr. Shreyashi Aryal offers specialized care in modern obstetrics, minimally invasive laparoscopy, and proactive women's reproductive health management across all life stages."
    });

    this.doctors.push({
      index: 7,
      title: "Dr. Sabindra Bhupal Malla",
      image: "assets/images/home-page/doctors-image/sabindraGopal.jpg",
      content: "Consultant Physician & Cardiologist",
      department: "Cardiology & Heart Care",
      education: ["MBBS", "MD (Cardiology, Dhaka)"],
      opdSchedule: "Mon, Wed, Sat (4:00 PM - 6:30 PM)",
      rating: 4.8,
      specializations: [
        "Preventive Cardiology & Hypertension Management",
        "Coronary Artery Disease & Heart Failure Evaluation",
        "Echocardiography (Echo) & 12-Lead ECG Interpretation",
        "Arrhythmia & Dyslipidemia Management"
      ],
      experience: [
        "Extensive clinical cardiology residency and non-invasive cardiac imaging experience",
        "Over 11+ years managing acute cardiac cases and outpatient cardiac clinics"
      ],
      bio: "Dr. Sabindra Bhupal Malla is dedicated to preventive and clinical cardiology, providing accurate diagnostic assessments through Echocardiography, ECG, and targeted cardiovascular therapies."
    });

    this.doctors.push({
      index: 8,
      title: "Dr. Ankit Niraula",
      image: "assets/images/home-page/doctors-image/ankit.png",
      content: "Consultant Orthopedic & Trauma Surgeon",
      department: "Orthopedics & Spine Care",
      education: ["MBBS", "MS (Orthopedics, TUTH, IOM)"],
      opdSchedule: "Sun, Wed, Fri (5:00 PM - 7:00 PM)",
      rating: 4.8,
      specializations: [
        "Fracture Fixation & Minimally Invasive Trauma Surgery",
        "Sports Injuries & Ligament Reconstruction (ACL / PCL)",
        "Spine Pain & Sciatica Management",
        "Pediatric Orthopedics & Musculoskeletal Care"
      ],
      experience: [
        "Residency from Tribhuvan University Teaching Hospital (TUTH)",
        "Over 9+ years managing complex sports injuries and orthopedic trauma"
      ],
      bio: "Dr. Ankit Niraula specializes in sports injury rehabilitation, fracture fixation, and musculoskeletal treatments aimed at swift return to active, pain-free daily routines."
    });

    this.doctors.push({
      index: 9,
      title: "Dr. Sudarshan Koirala",
      image: "assets/images/home-page/doctors-image/sudarshankoirala.jpg",
      content: "Consultant Pediatrician & Child Specialist",
      department: "Pediatrics & Neonatology",
      education: ["MBBS", "MD (Pediatrics, TUTH, IOM)"],
      opdSchedule: "Daily (4:00 PM - 6:30 PM)",
      rating: 4.9,
      specializations: [
        "Newborn & Infant Health Assessments",
        "Childhood Immunization & Vaccine Protocols",
        "Growth, Development & Pediatric Nutrition",
        "Pediatric Respiratory Illnesses & Allergies"
      ],
      experience: [
        "Trained at Kanti Children’s Hospital & TUTH pediatric units",
        "Over 12+ years of devoted outpatient and emergency pediatric care"
      ],
      bio: "Dr. Sudarshan Koirala provides caring, child-friendly pediatric healthcare, guiding parents through developmental milestones, immunization schedules, and childhood illness recovery."
    });

    this.doctors.push({
      index: 10,
      title: "Dr. Saroj Ghimire",
      image: "assets/images/home-page/doctors-image/sarojGhimere.jpg",
      content: "Internal Medicine Consultant Physician",
      department: "Internal Medicine & General Care",
      education: ["MBBS (KU)", "MD (Internal Medicine, BPKIHS)"],
      opdSchedule: "Sun to Fri (8:00 AM - 11:00 AM)",
      rating: 4.8,
      specializations: [
        "Infectious Diseases (Typhoid, Dengue, Seasonal Fevers)",
        "Hypertension, Diabetes & Chronic Disease Care",
        "Gastrointestinal & Respiratory Disorders",
        "Geriatric (Elderly) General Health Screening"
      ],
      experience: [
        "Extensive residency and clinical practice at BPKIHS, Dharan",
        "Over 10+ years of comprehensive internal medicine and critical care consultation"
      ],
      bio: "Dr. Saroj Ghimire specializes in diagnosing and managing multisystem general medical conditions, infectious illnesses, and chronic lifestyle diseases with thorough clinical acumen."
    });

    this.doctors.push({
      index: 11,
      title: "Dr. Prajwal Dhakal",
      image: "assets/images/home-page/doctors-image/prajwal1.jpg",
      content: "Consultant Radiologist & Sonologist",
      department: "Radiology & Imaging",
      education: ["MBBS (KU)", "MD (Radio Diagnosis)"],
      opdSchedule: "Daily (8:00 AM - 3:00 PM)",
      rating: 4.9,
      specializations: [
        "Ultrasonography (Abdomen, Pelvis, Obstetrics, Small Parts)",
        "Color Doppler Vascular Studies",
        "Digital Radiography (X-Ray) Reporting",
        "Ultrasound-Guided Diagnostic Procedures"
      ],
      experience: [
        "High-volume diagnostic ultrasound and radiographic reporting experience",
        "Over 11+ years as consultant radiologist at tertiary hospitals"
      ],
      bio: "Dr. Prajwal Dhakal brings high diagnostic precision to radiological imaging, performing crystal-clear USG scans and thorough digital X-ray evaluations for accurate clinical pathways."
    });

    this.doctors.push({
      index: 12,
      title: "Dr. Manisha Paneru",
      image: "assets/images/home-page/doctors-image/manishaPaneru.jpg",
      content: "Consultant ENT, Head & Neck Surgeon",
      department: "ENT (Ear, Nose & Throat)",
      education: ["MBBS (KU)", "MS (ENT - Head & Neck Surgery, BPKIHS)"],
      opdSchedule: "Sun, Tue, Thu (4:30 PM - 6:30 PM)",
      rating: 4.8,
      specializations: [
        "Sinusitis & Endoscopic Sinus Surgery (FESS)",
        "Hearing Loss, Tinnitus & Micro Ear Surgeries",
        "Throat, Tonsil & Voice Disorders",
        "Vertigo & Dizziness Diagnostics"
      ],
      experience: [
        "MS specialized surgical training in otolaryngology from BPKIHS",
        "Over 10+ years managing adult and pediatric ENT conditions"
      ],
      bio: "Dr. Manisha Paneru provides complete ENT care, utilizing modern diagnostic scopes for ear, nasal allergy, sinus, and throat conditions with gentle surgical and medical care."
    });

    this.doctors.push({
      index: 13,
      title: "Dr. Chandrika Sah",
      image: "assets/images/home-page/doctors-image/chandrikasah.jpg",
      content: "Consultant General & Laparoscopic Surgeon",
      department: "General & Laparoscopic Surgery",
      education: ["MBBS", "MS (General Surgery, KU)"],
      opdSchedule: "Mon, Wed, Fri (4:00 PM - 6:00 PM)",
      rating: 4.8,
      specializations: [
        "Laparoscopic Cholecystectomy (Gallbladder Surgery)",
        "Hernia Repair (Inguinal, Umbilical, Ventral)",
        "Appendectomy & Gastrointestinal Surgeries",
        "Anorectal Surgeries (Piles, Fissure, Fistula)"
      ],
      experience: [
        "Senior surgical registrar and consultant at major teaching hospitals",
        "Over 12+ years of surgical practice in minimally invasive laparoscopy"
      ],
      bio: "Dr. Chandrika Sah is an accomplished surgeon specializing in minimally invasive laparoscopic procedures, ensuring minimal post-operative pain and rapid patient recovery."
    });

    this.doctors.push({
      index: 14,
      title: "Dr. Sagar G.C.",
      image: "assets/images/home-page/doctors-image/sagar.png",
      content: "Consultant Dermatologist & Cosmetologist",
      department: "Dermatology & Skin Care",
      education: ["MBBS (TU)", "MD (Dermatology, Venereology & Leprology, KU)"],
      opdSchedule: "Sun, Wed, Fri (3:30 PM - 6:00 PM)",
      rating: 4.9,
      specializations: [
        "Acne, Scars & Hyperpigmentation Treatment",
        "Psoriasis, Eczema & Chronic Dermatitis",
        "Hair Fall, Alopecia & Scalp Disorders",
        "Cosmetic Dermatology & Chemical Peels"
      ],
      experience: [
        "MD Dermatology specialization with advanced aesthetic training",
        "Over 11+ years of dermatological consultation and skin rejuvenation"
      ],
      bio: "Dr. Sagar G.C. offers personalized clinical and aesthetic dermatology, treating complex skin conditions, allergies, and hair concerns using modern, evidence-based dermatological therapies."
    });

    this.doctors.push({
      index: 15,
      title: "Dr. Himal Khanal",
      image: "assets/images/home-page/doctors-image/himalKhanal.jpg",
      content: "Consultant Orthopedic Surgeon",
      department: "Orthopedics & Spine Care",
      education: ["MBBS", "MS (Orthopedics, KU)"],
      opdSchedule: "Mon, Thu, Sat (4:30 PM - 6:30 PM)",
      rating: 4.8,
      specializations: [
        "Spine & Low Back Pain Rehabilitation",
        "Joint Arthritis & Intra-articular Injections",
        "Bone Fracture Fixation & Trauma",
        "Tendonitis & Soft Tissue Rheumatism"
      ],
      experience: [
        "Extensive orthopedic surgical rotations at Kathmandu University hospitals",
        "Over 8+ years treating degenerative spine conditions and fractures"
      ],
      bio: "Dr. Himal Khanal focuses on conservative and operative management of musculoskeletal pain, back stiffness, and joint conditions to help patients regain pain-free functional freedom."
    });

    this.doctors.push({
      index: 16,
      title: "Dr. Anupa Khadka",
      image: "assets/images/home-page/doctors-image/anupakhadka.jpg",
      content: "Consultant Dermatologist & Venereologist",
      department: "Dermatology & Skin Care",
      education: ["MBBS (TU)", "MD (Dermatology, KU)"],
      opdSchedule: "Tue, Thu, Sat (3:00 PM - 5:30 PM)",
      rating: 4.8,
      specializations: [
        "Female Dermatological Disorders & Melasma",
        "Laser Therapy & Skin Brightening",
        "Allergic Urticaria & Autoimmune Skin Conditions",
        "Nail Disorders & Fungal Infections"
      ],
      experience: [
        "Clinical fellowship in cosmetic dermatology and skin pathology",
        "Over 9+ years providing attentive skin and hair consultations"
      ],
      bio: "Dr. Anupa Khadka is known for her gentle, comprehensive approach to skin health, specializing in pigmentation therapies, anti-aging skincare, and long-term allergy management."
    });

    this.doctors.push({
      index: 17,
      title: "Dr. Mohit Raj Dahal",
      image: "assets/images/home-page/doctors-image/mohitDahal.jpg",
      content: "Consultant Radiologist",
      department: "Radiology & Imaging",
      education: ["MBBS", "MD (Radio Diagnosis & Imaging, KUSMS, Dhulikhel)"],
      opdSchedule: "Daily (2:00 PM - 7:00 PM)",
      rating: 4.9,
      specializations: [
        "Obstetric 3D/4D Ultrasound & Anomaly Scans",
        "Musculoskeletal & Soft Tissue Ultrasound",
        "Thyroid & Breast Sonography",
        "Digital Radiography Quality Assessment"
      ],
      experience: [
        "Specialized imaging residency at Dhulikhel Hospital (KUSMS)",
        "Over 8+ years delivering high-accuracy diagnostic imaging and reports"
      ],
      bio: "Dr. Mohit Raj Dahal utilizes advanced ultrasound imaging modalities to provide fast, crystal-clear diagnostic interpretations for maternity, abdominal, and vascular health."
    });

    this.doctors.push({
      index: 18,
      title: "Dr. Kundan Raj Pandey",
      image: "assets/images/home-page/doctors-image/doctor.png",
      content: "Consultant Physician & Internist",
      department: "Internal Medicine & General Care",
      education: ["MBBS", "MD (Internal Medicine, TUTH, IOM)"],
      opdSchedule: "Sun to Thu (4:00 PM - 6:30 PM)",
      rating: 4.8,
      specializations: [
        "Metabolic Syndrome & Diabetic Management",
        "Respiratory & Asthma Management",
        "Cardiovascular Risk Factor Control",
        "Comprehensive Adult Health Checkups"
      ],
      experience: [
        "MD trained from TUTH with extensive experience in outpatient and inpatient internal medicine",
        "Over 10+ years in medical diagnosis and therapeutic care"
      ],
      bio: "Dr. Kundan Raj Pandey offers thoughtful, holistic physician consultations, focusing on accurate medical diagnosis and personalized lifestyle management for chronic ailments."
    });

    this.doctors.push({
      index: 19,
      title: "Dr. Elisha Bhattarai",
      image: "assets/images/home-page/doctors-image/doctor.png",
      content: "Consultant Dermatologist & Venereologist",
      department: "Dermatology & Skin Care",
      education: ["MBBS", "MD (Dermatology, KU)"],
      opdSchedule: "Mon, Wed, Fri (2:00 PM - 4:30 PM)",
      rating: 4.8,
      specializations: [
        "General Dermatology & Skin Rash Assessment",
        "Acne & Scar Management",
        "Pediatric Skin Disorders",
        "Cosmetic Consultations"
      ],
      experience: [
        "Clinical residency with extensive outpatient dermatology caseloads",
        "Over 7+ years of clinical skin care"
      ],
      bio: "Dr. Elisha Bhattarai provides specialized care for common and complex dermatological conditions, combining clinical medicine with skincare counseling for all ages."
    });

    this.doctors.push({
      index: 20,
      title: "Dr. Suman Adhikari",
      image: "assets/images/home-page/doctors-image/doctor.png",
      content: "Consultant ENT Surgeon",
      department: "ENT (Ear, Nose & Throat)",
      education: ["MBBS", "MS (ENT Surgery, KU)"],
      opdSchedule: "Tue, Thu, Sat (5:00 PM - 7:00 PM)",
      rating: 4.8,
      specializations: [
        "Ear Infections & Microscopic Otoscopy",
        "Nasal Polyps & Allergy Management",
        "Throat Infections & Hoarseness Evaluation",
        "Foreign Body Removal & Routine ENT Procedures"
      ],
      experience: [
        "MS in Otolaryngology with surgical expertise in head and neck procedures",
        "Over 8+ years of dedicated ENT clinical consultation"
      ],
      bio: "Dr. Suman Adhikari provides thorough diagnostic evaluations and treatments for ear, nasal, and throat disorders, ensuring patient comfort and rapid symptom relief."
    });

    this.doctors.push({
      index: 21,
      title: "Dr. Ujjwal Dotel",
      image: "assets/images/home-page/doctors-image/doctor.png",
      content: "Consultant Physiotherapist & Rehabilitation Specialist",
      department: "Physiotherapy & Rehabilitation",
      education: ["MPT (Musculoskeletal & Sports Physiotherapy)"],
      opdSchedule: "Daily (7:00 AM - 1:00 PM)",
      rating: 4.9,
      specializations: [
        "Musculoskeletal Pain Management (Back, Neck, Knee)",
        "Post-Operative Orthopedic Rehabilitation",
        "Sports Injury Recovery & Kinetic Taping",
        "Neurological Stroke & Mobility Training"
      ],
      experience: [
        "Master of Physiotherapy with specialized training in sports rehabilitation",
        "Over 9+ years managing clinic rehabilitation units"
      ],
      bio: "Dr. Ujjwal Dotel leads the physiotherapy department, utilizing advanced electrotherapy, manual mobilization, and targeted exercise regimens to restore mobility and eliminate pain."
    });
  }

  getDoctors(length: number = 0): IDoctors[] {
    if (!length) {
      return this.doctors;
    } else {
      return this.doctors.filter(x => x.index < length);
    }
  }

  getDoctorBYIndexNO(index: number): IDoctors | undefined {
    return this.doctors.find(x => x.index === index);
  }

  getDepartments(): string[] {
    const deps = new Set<string>();
    this.doctors.forEach(d => {
      if (d.department) deps.add(d.department);
    });
    return Array.from(deps);
  }
}
