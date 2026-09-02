import { Injectable } from '@angular/core';
import { IDoctors } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private doctors: IDoctors[] = [];

  constructor() {
    this.doctors = [
      // 0: Prof. Dr. Meena Thapa
      {
        index: 0,
        title: "Prof. Dr. Meena Thapa",
        titleNepali: "प्रा. डा. मीना थापा",
        image: "assets/images/home-page/doctors-image/minaThapa.jpg",
        content: "Sr. Consultant Obstetrics & Gynaecologist",
        contentNepali: "वरिष्ठ स्त्री तथा प्रसूति रोग विशेषज्ञ",
        department: "Gynecology & Obstetrics",
        departmentNepali: "स्त्री तथा प्रसूति रोग विभाग",
        education: ["MBBS", "MD (TUTH)"],
        opdSchedule: "Mon, Wed, Fri (4:00 PM - 6:30 PM)",
        opdScheduleNepali: "सोम, बुध, शुक्र (दिउँसो ४:०० - ६:३०)",
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
        bio: "Prof. Dr. Meena Thapa is a widely respected senior consultant in obstetrics and gynecology, providing compassionate, evidence-based care for high-risk pregnancies, infertility, and complex women's health conditions."
      },
      // 1: Dr. Srijan Malla
      {
        index: 1,
        title: "Dr. Srijan Malla",
        titleNepali: "डा. सृजन मल्ल",
        image: "",
        content: "Sr. Consultant General & Laparoscopic Surgeon",
        contentNepali: "वरिष्ठ जनरल तथा ल्याप्रोस्कोपिक सर्जन",
        department: "General & Laparoscopic Surgery",
        departmentNepali: "जनरल तथा ल्याप्रोस्कोपिक सर्जरी विभाग",
        education: ["MBBS", "MS"],
        opdSchedule: "Tue, Thu, Sat (4:00 PM - 6:30 PM)",
        opdScheduleNepali: "मंगलबार, बिहीबार, शनिबार (दिउँसो ४:०० - ६:३०)",
        rating: 4.9,
        specializations: [
          "Advanced Laparoscopic Surgeries",
          "Gallstone & Hernia Procedures",
          "Gastrointestinal Surgical Conditions",
          "Minor Surgical Procedures & Wound Care"
        ],
        experience: [
          "Senior surgical consultant with extensive laparoscopic caseloads",
          "Over 15+ years of clinical and surgical expertise"
        ],
        bio: "Dr. Srijan Malla is a senior general and laparoscopic surgeon providing modern minimally invasive surgical evaluations and procedures."
      },
      // 2: Dr. Bipendra D K Rai
      {
        index: 2,
        title: "Dr. Bipendra D K Rai",
        titleNepali: "डा. बिपेन्द्र डी. के. राई",
        image: "assets/images/home-page/doctors-image/Dependra.png",
        content: "Sr. Consultant Urologist",
        contentNepali: "वरिष्ठ युरोलोजिष्ट (मूत्र तथा मिर्गौला रोग विशेषज्ञ)",
        department: "Urology & Kidney Care",
        departmentNepali: "युरोलोजी तथा मिर्गौला उपचार विभाग",
        education: ["MBBS", "MS", "MCh (Urology, TUTH)"],
        opdSchedule: "Tue, Thu, Sat (4:30 PM - 6:30 PM)",
        opdScheduleNepali: "मंगलबार, बिहीबार, शनिबार (दिउँसो ४:३० - ६:३०)",
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
        bio: "Dr. Bipendra D K Rai brings state-of-the-art diagnostic and surgical expertise in urology, offering cutting-edge endoscopic solutions for kidney stones and prostate disorders."
      },

      // 3: Dr. Suman Baral
      {
        index: 3,
        title: "Dr. Suman Baral",
        titleNepali: "डा. सुमन बराल",
        image: "assets/images/home-page/doctors-image/sumanBaral.jpg",
        content: "Sr. Consultant Endocrinologist & Physician",
        contentNepali: "वरिष्ठ इन्डोक्राइनोलोजिष्ट तथा फिजिसियन (मधुमेह तथा हर्मोन रोग विशेषज्ञ)",
        department: "Internal Medicine & Endocrinology",
        departmentNepali: "इन्टरनल मेडिसिन तथा इन्डोक्राइनोलोजी विभाग",
        education: ["MBBS", "MD", "MRCP (UK)"],
        opdSchedule: "Sun, Tue, Thu (5:00 PM - 7:00 PM)",
        opdScheduleNepali: "आइतबार, मंगलबार, बिहीबार (बेलुकी ५:०० - ७:००)",
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
        bio: "Dr. Suman Baral is a leading consultant endocrinologist specializing in comprehensive diabetes care, hormonal balancing, and advanced metabolic disease management."
      },
      // 4: Dr. Suresh Thapa
      {
        index: 4,
        title: "Dr. Suresh Thapa",
        titleNepali: "डा. सुरेश थापा",
        image: "assets/images/home-page/doctors-image/Suresh1.png",
        content: "Sr. Consultant Orthopedic Surgeon",
        contentNepali: "वरिष्ठ हाडजोर्नी तथा नशा रोग विशेषज्ञ सर्जन",
        department: "Orthopedics & Spine Care",
        departmentNepali: "हाडजोर्नी, मेरुदण्ड तथा नशा रोग विभाग",
        education: ["MBBS", "MS (Ortho)", "Fellowship in Spine Surgery"],
        opdSchedule: "Sun to Fri (3:00 PM - 5:30 PM)",
        opdScheduleNepali: "आइतबार देखि शुक्रबार (दिउँसो ३:०० - ५:३०)",
        rating: 4.9,
        specializations: [
          "Spine Surgery & Disc Herniation Interventions",
          "Total Knee & Hip Replacement Surgeries",
          "Complex Trauma & Fracture Reconstruction",
          "Degenerative Joint Arthritis & Osteoporosis"
        ],
        experience: [
          "Fellowship in spine surgery with thousands of successful orthopedic procedures",
          "Over 18+ years of dedicated service in orthopedic and spine care"
        ],
        bio: "Dr. Suresh Thapa is a distinguished senior orthopedic surgeon specializing in spine surgery, trauma stabilization, and joint restoration."
      },
      // 5: Dr. Basudev Karki
      {
        index: 5,
        title: "Dr. Basudev Karki",
        titleNepali: "डा. बासुदेव कार्की",
        image: "assets/images/home-page/doctors-image/basudev.png",
        content: "Senior Consultant Psychiatrist",
        contentNepali: "वरिष्ठ मनोचिकित्सक तथा मानसिक स्वास्थ्य विशेषज्ञ",
        department: "Psychiatry & Mental Health",
        departmentNepali: "मनोचिकित्सा तथा मानसिक स्वास्थ्य विभाग",
        education: ["MBBS", "MD (Psychiatry, NAMS)"],
        opdSchedule: "Sun, Wed, Fri (4:00 PM - 6:00 PM)",
        opdScheduleNepali: "आइतबार, बुधबार, शुक्रबार (दिउँसो ४:०० - ६:००)",
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
      },
       // 6: Assoc. Prof. Dr. Shreyashi Aryal
      {
        index: 6,
        title: "Assoc. Prof. Dr. Shreyashi Aryal",
        titleNepali: "सह-प्रा. डा. श्रेयसी अर्याल",
        image: "assets/images/home-page/doctors-image/sheryaCaryal.jpg",
        content: "Consultant Obstetrics & Gynaecologist Laparoscopic Surgeon",
        contentNepali: "स्त्री तथा प्रसूति रोग एवं ल्याप्रोस्कोपिक सर्जन",
        department: "Gynecology & Obstetrics",
        departmentNepali: "स्त्री तथा प्रसूति रोग विभाग",
        education: ["MBBS", "MD (KU)"],
        opdSchedule: "Sun, Tue, Thu (3:00 PM - 5:30 PM)",
        opdScheduleNepali: "आइतबार, मंगलबार, बिहीबार (दिउँसो ३:०० - ५:३०)",
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
        bio: "Assoc. Prof. Dr. Shreyashi Aryal offers specialized care in modern obstetrics, minimally invasive laparoscopy, and proactive women's reproductive health management."
      },
      // 7: Dr. Sabindra Bhupal Malla
      {
        index: 7,
        title: "Dr. Sabindra Bhupal Malla",
        titleNepali: "डा. सबिन्द्र भूपाल मल्ल",
        image: "assets/images/home-page/doctors-image/sabindraGopal.jpg",
        content: "Consultant Physician & Cardiologist",
        contentNepali: "फिजिसियन तथा मुटुरोग विशेषज्ञ",
        department: "Cardiology & Heart Care",
        departmentNepali: "मुटु तथा कार्डियोलोजी विभाग",
        education: ["MBBS", "MD CARDIO (Dhaka Bangladesh)"],
        opdSchedule: "Mon, Wed, Sat (4:00 PM - 6:30 PM)",
        opdScheduleNepali: "सोमबार, बुधबार, शनिबार (दिउँसो ४:०० - ६:३०)",
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
      },
       // 8: Dr. Sushil Sharma
      {
        index: 8,
        title: "Dr. Sushil Sharma",
        titleNepali: "डा. सुशील शर्मा",
        image: "",
        content: "Consultant Orthopedic Surgeon",
        contentNepali: "हाडजोर्नी तथा नशा रोग विशेषज्ञ सर्जन",
        department: "Orthopedics & Spine Care",
        departmentNepali: "हाडजोर्नी तथा मेरुदण्ड विभाग",
        education: ["MBBS", "MS (KU)", "Fellowship-Arthroplasty"],
        opdSchedule: "Mon, Wed, Sat (5:00 PM - 7:00 PM)",
        opdScheduleNepali: "सोमबार, बुधबार, शनिबार (बेलुकी ५:०० - ७:००)",
        rating: 4.8,
        specializations: [
          "Joint Arthroplasty (Knee & Hip Replacement)",
          "Degenerative Joint Disease & Osteoarthritis",
          "Arthroscopic Joint Interventions",
          "Fracture Management & Rehabilitation"
        ],
        experience: [
          "Fellowship-trained in joint arthroplasty with high surgical proficiency",
          "Over 10+ years treating complex joint and bone disorders"
        ],
        bio: "Dr. Sushil Sharma is a fellowship-trained orthopedic surgeon dedicated to restoring joint mobility and relieving pain through modern orthopedic care."
      },
       // 9: Dr. Rudra Dahal
      {
        index: 9,
        title: "Dr. Rudra Dahal",
        titleNepali: "डा. रुद्र दाहाल",
        image: "",
        content: "Sr. Consultant Urologist",
        contentNepali: "वरिष्ठ युरोलोजिष्ट (मूत्र तथा मिर्गौला रोग विशेषज्ञ)",
        department: "Urology & Kidney Care",
        departmentNepali: "युरोलोजी तथा मिर्गौला उपचार विभाग",
        education: ["MBBS", "MS", "MCh (Urology, NAMS)"],
        opdSchedule: "Sun, Wed, Fri (4:30 PM - 6:30 PM)",
        opdScheduleNepali: "आइतबार, बुधबार, शुक्रबार (दिउँसो ४:३० - ६:३०)",
        rating: 4.9,
        specializations: [
          "Advanced Endourology & Laser Stone Surgery",
          "Prostate Health & Minimally Invasive Surgeries",
          "Reconstructive Urology & Urethral Strictures",
          "Urological Oncology & Renal Diagnostics"
        ],
        experience: [
          "MCh Urologist with senior surgical leadership at tertiary centers",
          "Over 16+ years of expertise in advanced urological surgery"
        ],
        bio: "Dr. Rudra Dahal is a senior consultant urologist specializing in advanced laser endourology, prostate treatments, and comprehensive kidney wellness."
      },
       // 10: Dr. Sudarshan Koirala
      {
        index: 10,
        title: "Dr. Sudarshan Koirala",
        titleNepali: "डा. सुदर्शन कोइराला",
        image: "assets/images/home-page/doctors-image/sudarshankoirala.jpg",
        content: "Consultant Pediatrician",
        contentNepali: "बालरोग विशेषज्ञ (शिशु तथा बाल स्वास्थ्य)",
        department: "Pediatrics & Child Health",
        departmentNepali: "बालरोग तथा शिशु स्वास्थ्य विभाग",
        education: ["MBBS", "MD (TUTH, IOM) (Gold Medalist)"],
        opdSchedule: "Daily (4:00 PM - 6:30 PM)",
        opdScheduleNepali: "दैनिक (दिउँसो ४:०० - ६:३०)",
        rating: 4.9,
        specializations: [
          "Newborn & Infant Health Assessments",
          "Childhood Immunization & Vaccine Protocols",
          "Growth, Development & Pediatric Nutrition",
          "Pediatric Respiratory Illnesses & Allergies"
        ],
        experience: [
          "Gold medalist trained at leading pediatric institutes",
          "Over 12+ years of devoted outpatient and pediatric care"
        ],
        bio: "Dr. Sudarshan Koirala provides caring, child-friendly pediatric healthcare, guiding parents through developmental milestones, immunization schedules, and childhood illness recovery."
      },
      // 11: Dr. Dinesh Koirala
      {
        index: 11,
        title: "Dr. Dinesh Koirala",
        titleNepali: "डा. दिनेश कोइराला",
        image: "",
        content: "Consultant Physician & Gastroenterologist",
        contentNepali: "कन्सल्टेन्ट फिजिसियन तथा पेट र कलेजो रोग विशेषज्ञ",
        department: "Gastroenterology & Hepatology",
        departmentNepali: "ग्यास्ट्रोइन्टेरोलोजी तथा हेपाटोलोजी विभाग",
        education: ["MBBS", "MD", "DM (Gastro, TUTH)"],
        opdSchedule: "Sun, Wed, Fri (4:00 PM - 6:30 PM)",
        opdScheduleNepali: "आइतबार, बुधबार, शुक्रबार (दिउँसो ४:०० - ६:३०)",
        rating: 4.9,
        specializations: [
          "Acid Peptic Disease, GERD & Chronic Gastritis",
          "Fatty Liver, Hepatitis & Liver Cirrhosis Management",
          "Diagnostic Upper GI Endoscopy & Colonoscopy",
          "Irritable Bowel Syndrome (IBS) & Colitis"
        ],
        experience: [
          "DM Super-specialization in Gastroenterology from TUTH",
          "Over 12+ years in hepatobiliary and gastrointestinal disease management"
        ],
        bio: "Dr. Dinesh Koirala is a super-specialist gastroenterologist providing expert clinical evaluation and endoscopic diagnosis for digestive and liver disorders."
      },
      // 12: Dr. Rajendra Bhandari
      {
        index: 12,
        title: "Dr. Rajendra Bhandari",
        titleNepali: "डा. राजेन्द्र भण्डारी",
        image: "",
        content: "Consultant Physician",
        contentNepali: "कन्सल्टेन्ट फिजिसियन (सामान्य तथा आन्तरिक रोग विशेषज्ञ)",
        department: "Internal Medicine & General Care",
        departmentNepali: "इन्टरनल मेडिसिन तथा जनरल केयर विभाग",
        education: ["MBBS", "MD (NAMS)"],
        opdSchedule: "Mon to Fri (8:00 AM - 11:00 AM)",
        opdScheduleNepali: "सोमबार देखि शुक्रबार (बिहान ८:०० - ११:००)",
        rating: 4.8,
        specializations: [
          "Comprehensive Adult Internal Medicine",
          "Hypertension, Diabetes & Chronic Disease Care",
          "Infectious Diseases & Seasonal Illnesses",
          "Preventative Health Checkups"
        ],
        experience: [
          "MD internal medicine consultant with extensive tertiary hospital experience",
          "Over 11+ years managing complex adult medical conditions"
        ],
        bio: "Dr. Rajendra Bhandari is a dedicated consultant physician offering holistic diagnostic assessments and personalized treatment plans for acute and chronic conditions."
      },
      // 13: Dr. Prajwal Dhakal
      {
        index: 13,
        title: "Dr. Prajwal Dhakal",
        titleNepali: "डा. प्रज्वल ढकाल",
        image: "assets/images/home-page/doctors-image/prajwal1.jpg",
        content: "Consultant Radiologist",
        contentNepali: "रेडियोलोजिष्ट (भिडियो एक्सरे तथा एक्स-रे विशेषज्ञ)",
        department: "Radiology & Imaging",
        departmentNepali: "रेडियोलोजी तथा इमेजिङ विभाग",
        education: ["MBBS (KU)", "MD Radio Diagnosis & Imaging (TUTH, IOM)"],
        opdSchedule: "Daily (8:00 AM - 3:00 PM)",
        opdScheduleNepali: "दैनिक (बिहान ८:०० - दिउँसो ३:००)",
        rating: 4.9,
        specializations: [
          "Ultrasonography (Abdomen, Pelvis, Obstetrics, Small Parts)",
          "Color Doppler Vascular Studies",
          "Digital Radiography (X-Ray) Reporting",
          "Ultrasound-Guided Diagnostic Procedures"
        ],
        experience: [
          "High-volume diagnostic ultrasound and radiographic reporting experience",
          "Over 11+ years as consultant radiologist"
        ],
        bio: "Dr. Prajwal Dhakal brings high diagnostic precision to radiological imaging, performing crystal-clear USG scans and thorough digital X-ray evaluations."
      },
      // 14: Dr. Manisha Paneru
      {
        index: 14,
        title: "Dr. Manisha Paneru",
        titleNepali: "डा. मनिषा पनेरु",
        image: "assets/images/home-page/doctors-image/manishaPaneru.jpg",
        content: "Consultant ENT Surgeon",
        contentNepali: "नाक, कान तथा घाँटी रोग विशेषज्ञ सर्जन",
        department: "ENT (Ear, Nose & Throat)",
        departmentNepali: "नाक, कान तथा घाँटी (ENT) विभाग",
        education: ["MBBS (KU)", "MS (BPKIHS)"],
        opdSchedule: "Sun, Tue, Thu (4:30 PM - 6:30 PM)",
        opdScheduleNepali: "आइतबार, मंगलबार, बिहीबार (दिउँसो ४:३० - ६:३०)",
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
        bio: "Dr. Manisha Paneru provides complete ENT care, utilizing modern diagnostic video scopes for ear, nasal allergy, sinus, and throat conditions."
      },
      // 15: Dr. Suman Adhikari
      {
        index: 15,
        title: "Dr. Suman Adhikari",
        titleNepali: "डा. सुमन अधिकारी",
        image: "",
        content: "Consultant ENT Surgeon",
        contentNepali: "नाक, कान तथा घाँटी रोग विशेषज्ञ सर्जन",
        department: "ENT (Ear, Nose & Throat)",
        departmentNepali: "नाक, कान तथा घाँटी (ENT) विभाग",
        education: ["MBBS", "MS (KU)"],
        opdSchedule: "Tue, Thu, Sat (5:00 PM - 7:00 PM)",
        opdScheduleNepali: "मंगलबार, बिहीबार, शनिबार (बेलुकी ५:०० - ७:००)",
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
        bio: "Dr. Suman Adhikari provides thorough diagnostic evaluations and treatments for ear, nasal, and throat disorders."
      },
      // 16: Dr. Chandrika Sah
      {
        index: 16,
        title: "Dr. Chandrika Sah",
        titleNepali: "डा. चन्द्रिका साह",
        image: "assets/images/home-page/doctors-image/chandrikasah.jpg",
        content: "Consultant General & Laproscopic Surgeon",
        contentNepali: "जनरल तथा ल्याप्रोस्कोपिक सर्जन",
        department: "General & Laparoscopic Surgery",
        departmentNepali: "जनरल तथा ल्याप्रोस्कोपिक सर्जरी विभाग",
        education: ["MBBS", "MS (KU)"],
        opdSchedule: "Mon, Wed, Fri (4:00 PM - 6:00 PM)",
        opdScheduleNepali: "सोमबार, बुधबार, शुक्रबार (दिउँसो ४:०० - ६:००)",
        rating: 4.8,
        specializations: [
          "Laparoscopic Cholecystectomy (Gallbladder Surgery)",
          "Hernia Repair (Inguinal, Umbilical, Ventral)",
          "Appendectomy & Gastrointestinal Surgeries",
          "Anorectal Surgeries (Piles, Fissure, Fistula)"
        ],
        experience: [
          "Senior surgical consultant at major teaching hospitals",
          "Over 12+ years of surgical practice in minimally invasive laparoscopy"
        ],
        bio: "Dr. Chandrika Sah is an accomplished surgeon specializing in minimally invasive laparoscopic procedures, ensuring minimal post-operative pain and rapid patient recovery."
      },
       // 17: Dr. Saroj Sah
      {
        index: 17,
        title: "Dr. Saroj Sah",
        titleNepali: "डा. सरोज साह",
        image: "assets/images/home-page/doctors-image/drSaroj.jpeg",
        content: "Consultant Pediatrician",
        contentNepali: "बालरोग विशेषज्ञ (शिशु तथा बाल स्वास्थ्य)",
        department: "Pediatrics & Child Health",
        departmentNepali: "बालरोग तथा शिशु स्वास्थ्य विभाग",
        education: ["MBBS", "MS (KU)"],
        opdSchedule: "Sun, Tue, Thu (3:00 PM - 5:30 PM)",
        opdScheduleNepali: "आइतबार, मंगलबार, बिहीबार (दिउँसो ३:०० - ५:३०)",
        rating: 4.8,
        specializations: [
          "General Pediatric Health & Growth Tracking",
          "Childhood Infectious Diseases & Fever Care",
          "Pediatric Asthma & Respiratory Care",
          "Childhood Nutrition & Immunization"
        ],
        experience: [
          "Specialized pediatric training with extensive clinical experience",
          "Over 9+ years providing compassionate medical care for infants and children"
        ],
        bio: "Dr. Saroj Sah offers gentle, personalized healthcare for infants, children, and adolescents, addressing acute illnesses and growth milestones."
      },
      // 18: Dr. Sagar G.C.
      {
        index: 18,
        title: "Dr. Sagar G.C.",
        titleNepali: "डा. सागर जि. सी.",
        image: "assets/images/home-page/doctors-image/sagar.png",
        content: "Consultant Dermatologist",
        contentNepali: "छाला, यौन तथा सौन्दर्य रोग विशेषज्ञ",
        department: "Dermatology & Skin Care",
        departmentNepali: "छाला तथा सौन्दर्य रोग विभाग",
        education: ["MBBS (TU)", "MD (KU)"],
        opdSchedule: "Sun, Wed, Fri (3:30 PM - 6:00 PM)",
        opdScheduleNepali: "आइतबार, बुधबार, शुक्रबार (दिउँसो ३:३० - ६:००)",
        rating: 4.9,
        specializations: [
          "Acne, Scars & Hyperpigmentation Treatment",
          "Psoriasis, Eczema & Chronic Dermatitis",
          "Hair Fall, Alopecia & Scalp Disorders",
          "Cosmetic Dermatology & Chemical Peels"
        ],
        experience: [
          "MD Dermatology specialization with advanced aesthetic training",
          "Over 11+ years of dermatological consultation and skin care"
        ],
        bio: "Dr. Sagar G.C. offers personalized clinical and aesthetic dermatology, treating complex skin conditions, allergies, and hair concerns."
      },
      // 19: Dr. Himal Khanal
      {
        index: 19,
        title: "Dr. Himal Khanal",
        titleNepali: "डा. हिमाल खनाल",
        image: "assets/images/home-page/doctors-image/himalKhanal.jpg",
        content: "Consultant Orthopedic Surgeon",
        contentNepali: "हाडजोर्नी तथा नशा रोग विशेषज्ञ सर्जन",
        department: "Orthopedics & Spine Care",
        departmentNepali: "हाडजोर्नी तथा मेरुदण्ड विभाग",
        education: ["MBBS", "MS (KU)"],
        opdSchedule: "Mon, Thu, Sat (4:30 PM - 6:30 PM)",
        opdScheduleNepali: "सोमबार, बिहीबार, शनिबार (दिउँसो ४:३० - ६:३०)",
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
        bio: "Dr. Himal Khanal focuses on conservative and operative management of musculoskeletal pain, back stiffness, and joint conditions."
      },
      // 20: Dr. Ayush Thapa
      {
        index: 20,
        title: "Dr. Ayush Thapa",
        titleNepali: "डा. आयुष थापा",
        image: "",
        content: "Consultant Orthopedic Surgeon",
        contentNepali: "हाडजोर्नी सर्जन (अंग पुनर्निर्माण तथा विकृति सुधार विशेषज्ञ)",
        department: "Fellowship In Deformity Correction And Limb Reconstruction",
        departmentNepali: "अंग पुनर्निर्माण तथा विकृति सुधार विभाग",
        education: ['MBBS', 'MS (Ortho)'],
        opdSchedule: "Sat (11:00 AM - 1:00 PM)",
        opdScheduleNepali: "शनिबार (बिहान ११:०० - दिउँसो १:००)",
        rating: 4.8,
        specializations: [
          "Limb Lengthening Surgeries (Ilizarov & External Fixation)",
          "Complex Trauma Reconstruction",
          "Congenital Limb Deformity Correction",
          "Bone Infection (Osteomyelitis) Management"
        ],
        experience: [
          "Fellowship trained in deformity correction from internationally reputed centers",
          "Over 7+ years of specialized surgical experience in limb reconstruction"
        ],
        bio: "Dr. Ayush Thapa is a specialized orthopedic surgeon dedicated to treating complex limb deformities and reconstruction challenges using advanced techniques like the Ilizarov method and external fixation."
      },
      // 21: Dr. Mohit Raj Dahal
      {
        index: 21,
        title: "Dr. Mohit Raj Dahal",
        titleNepali: "डा. मोहित राज दाहाल",
        image: "assets/images/home-page/doctors-image/mohitDahal.jpg",
        content: "Consultant Radiologist",
        contentNepali: "रेडियोलोजिष्ट (अल्ट्रासाउण्ड तथा भिडियो एक्स-रे विशेषज्ञ)",
        department: "Radiology & Imaging",
        departmentNepali: "रेडियोलोजी तथा इमेजिङ विभाग",
        education: ["MBBS", "MD Radio Diagnosis & Imaging (KUSMS, Dhulikhel) (Gold Medalist)"],
        opdSchedule: "Daily (2:00 PM - 7:00 PM)",
        opdScheduleNepali: "दैनिक (दिउँसो २:०० - बेलुकी ७:००)",
        rating: 4.9,
        specializations: [
          "Obstetric Ultrasound & Anomaly Scans",
          "Musculoskeletal & Soft Tissue Ultrasound",
          "Thyroid & Breast Sonography",
          "Digital Radiography Quality Assessment"
        ],
        experience: [
          "Gold medalist specialist in imaging from Dhulikhel Hospital (KUSMS)",
          "Over 8+ years delivering high-accuracy diagnostic imaging and reports"
        ],
        bio: "Dr. Mohit Raj Dahal utilizes advanced ultrasound imaging modalities to provide fast, crystal-clear diagnostic interpretations."
      },
      // 22: Dr. Bibek K.C
      {
        index: 22,
        title: "Dr. Bibek K.C",
        titleNepali: "डा. बिबेक के. सी.",
        image: "",
        content: "Consultant Radiologist",
        contentNepali: "रेडियोलोजिष्ट (भिडियो एक्स-रे तथा रेडियो डायग्नोसिस)",
        department: "Radiology & Imaging",
        departmentNepali: "रेडियोलोजी तथा इमेजिङ विभाग",
        education: ["MBBS", "MD Radio Diagnosis & Imaging"],
        opdSchedule: "Daily (2:00 PM - 7:00 PM)",
        opdScheduleNepali: "दैनिक (दिउँसो २:०० - बेलुकी ७:००)",
        rating: 4.9,
        specializations: [
          "Obstetric Ultrasound & Anomaly Scans",
          "Musculoskeletal & Soft Tissue Ultrasound",
          "Thyroid & Breast Sonography",
          "Digital Radiography Quality Assessment"
        ],
        experience: [
          "Senior consultant in clinical imaging and ultrasonic diagnosis",
          "Over 8+ years delivering high-accuracy diagnostic imaging and reports"
        ],
        bio: "Dr. Bibek K.C utilizes advanced ultrasound imaging modalities to provide fast, crystal-clear diagnostic interpretations."
      }
    ];
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
