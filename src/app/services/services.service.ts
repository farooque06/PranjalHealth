import { Injectable } from '@angular/core';
import { IServices } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services: IServices[] = [];

  constructor() {
    this.initServices();
  }

  private initServices(): void {
    this.services = [
      // ==========================================
      // 01 — SPECIALIST SERVICES (Indices 0 - 11)
      // ==========================================
      {
        index: 0,
        title: "General Medicine",
        titleNepali: "जनरल मेडिसिन (फिजिसियन सेवा)",
        subtitle: "Comprehensive Adult Health, Chronic Illness & Preventative Care",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Internal Medicine",
        badgeNepali: "फिजिसियन",
        icon: "fa-stethoscope",
        turnaround: "Daily OPD Morning & Evening",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Our General Medicine (Internal Medicine) outpatient department provides comprehensive primary and specialty care for adults of all ages. Experienced consultant physicians diagnose, treat, and manage complex acute illnesses, fever spikes, seasonal infections, and chronic lifestyle diseases such as hypertension, diabetes mellitus, dyslipidemia, thyroid dysfunction, and multi-system metabolic conditions.",
        preparation: "Bring all previous medical records, ongoing medication prescriptions, and recent lab reports for a thorough physician review.",
        features: [
          "Comprehensive diagnosis of acute & chronic medical conditions",
          "Hypertension, diabetes & metabolic disease management",
          "Preventative health assessments & geriatric wellness",
          "Post-hospitalization follow-up and prescription reconciliation"
        ],
        benefits: [
          "Holistic treatment approach tailored to individual health profiles",
          "Seamless coordination with on-site lab & diagnostic imaging",
          "Dedicated patient education on diet, lifestyle & medication"
        ]
      },
      {
        index: 1,
        title: "Gastrointestinal & Liver Diseases",
        titleNepali: "ग्यास्ट्रो तथा कलेजो रोग",
        subtitle: "Advanced Diagnosis & Clinical Care for Digestive & Hepatobiliary Disorders",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Gastro & Liver",
        badgeNepali: "ग्यास्ट्रो/कलेजो",
        icon: "fa-shield-virus",
        turnaround: "Specialist OPD Consultation",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Our Gastroenterology and Hepatology clinic is dedicated to the clinical management of disorders affecting the esophagus, stomach, intestines, liver, gallbladder, and pancreas. Leading gastroenterologists provide expert evaluation for GERD, acid reflux, peptic ulcers, IBS, chronic constipation, hepatitis B & C, fatty liver disease, liver cirrhosis, pancreatitis, and gastrointestinal bleeding.",
        preparation: "If an upper GI endoscopy or liver panel is planned alongside your consultation, an overnight 8-10 hour fast may be required.",
        features: [
          "Expert evaluation of acid peptic disease, GERD & gastritis",
          "Liver disease screening (Fatty liver, Hepatitis, Cirrhosis)",
          "Irritable Bowel Syndrome (IBS) & inflammatory bowel care",
          "Direct linkage with diagnostic Upper Endoscopy & Colonoscopy"
        ],
        benefits: [
          "Rapid relief from chronic digestive discomfort & acidity",
          "Early detection and monitoring of chronic liver conditions",
          "Personalized nutritional and medical therapy plans"
        ]
      },
      {
        index: 2,
        title: "Pediatrics",
        titleNepali: "बालरोग विशेषज्ञ सेवा",
        subtitle: "Specialized Infant, Child & Adolescent Healthcare & Growth Monitoring",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Child Health",
        badgeNepali: "बालरोग",
        icon: "fa-baby",
        turnaround: "Daily Pediatric OPD",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Pranjal’s Pediatrics department delivers compassionate, child-friendly medical care from newborns through adolescence. Our pediatricians monitor physical, motor, and cognitive development, administer routine and optional childhood immunizations, and diagnose common pediatric conditions including respiratory infections, childhood asthma, allergies, nutritional deficiencies, and gastrointestinal illnesses.",
        preparation: "Please bring your child's immunization record book and a log of any recent fevers or symptoms.",
        features: [
          "Complete newborn & child developmental milestone monitoring",
          "Routine & optional pediatric vaccination regimens",
          "Management of pediatric asthma, allergies & infections",
          "Nutritional guidance, weaning advice & growth assessment"
        ],
        benefits: [
          "Warm, gentle, and child-comforting clinical environment",
          "Prompt emergency fever guidance and pediatric counseling",
          "Dedicated vaccination tracking for peace of mind"
        ]
      },
      {
        index: 3,
        title: "Obstetrics, Gynecology & Family Planning",
        titleNepali: "प्रसूति, स्त्रीरोग तथा परिवार नियोजन",
        subtitle: "Women's Health, Antenatal Care, Maternity Support & Reproductive Health",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Women's Health",
        badgeNepali: "प्रसूति/स्त्रीरोग",
        icon: "fa-person-pregnant",
        turnaround: "Specialist OPD Chamber",
        image: ["assets/images/home-page/services/ultraSono2.jpg"],
        content: "Our Obstetrics and Gynecology department offers comprehensive healthcare for women at every stage of life. Services include routine gynecological screenings, Pap smears, management of menstrual irregularities, PCOS/PCOD, uterine fibroids, pelvic infections, comprehensive antenatal checkups for expectant mothers, fertility counseling, and modern family planning guidance.",
        preparation: "For pelvic exams and ultrasound scans, comfortable clothing is recommended. Please note the date of your last menstrual period (LMP).",
        features: [
          "Antenatal & postnatal mother-child wellness checkups",
          "PCOS/PCOD, hormonal imbalance & irregular cycle treatment",
          "Cervical cancer screening (Pap Smear) & HPV vaccination",
          "Safe and confidential family planning & contraception counseling"
        ],
        benefits: [
          "Private, respectful, and confidential consultation rooms",
          "Integrated high-resolution pregnancy ultrasound sonography",
          "Experienced senior female gynecologists available"
        ]
      },
      {
        index: 4,
        title: "Orthopedics, Joint, Nerve & Rheumatic Diseases",
        titleNepali: "हाडजोर्नी, नशा तथा बाथरोग",
        subtitle: "Advanced Bone, Spine, Joint Arthritis & Musculoskeletal Care",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Orthopedics & Spine",
        badgeNepali: "हाडजोर्नी/नशा",
        icon: "fa-bone",
        turnaround: "Specialist OPD Clinic",
        image: ["assets/images/home-page/services/digitalXray.jpg"],
        content: "Our Orthopedics and Rheumatology specialty clinic provides expert clinical care for degenerative joint disorders, osteoarthritis, rheumatoid arthritis, gout, osteoporosis, spine issues (cervical/lumbar spondylosis, sciatica), sports injuries, tendonitis, and post-fracture recovery. Our orthopedic specialists work in close sync with on-site digital X-Ray and physiotherapy.",
        preparation: "Wear clothing that allows easy examination of the affected joint or limb. Bring previous X-rays or MRI scans if available.",
        features: [
          "Arthritis, joint pain, osteoporosis & uric acid management",
          "Spine care (Neck pain, lower back pain, sciatica & disc issues)",
          "Fracture management, casting & post-traumatic rehabilitation",
          "Collaborative pain management with on-site physiotherapy"
        ],
        benefits: [
          "Rapid diagnosis with on-site high-resolution digital X-Ray",
          "Non-surgical joint preservation and mobility restoration",
          "Personalized rehabilitation exercise regimens"
        ]
      },
      {
        index: 5,
        title: "Endocrinology (Endocrinologist)",
        titleNepali: "इन्डोक्राइनोलोजी (मधुमेह तथा थाइराइड)",
        subtitle: "Specialized Care for Diabetes Mellitus, Thyroid & Hormonal Health",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Diabetes & Thyroid",
        badgeNepali: "मधुमेह/थाइराइड",
        icon: "fa-dna",
        turnaround: "Specialist Endocrinology OPD",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "The Endocrinology department focuses on the precise diagnosis and modern management of endocrine gland disorders and metabolic imbalances. Our endocrinologists specialize in Type 1 & Type 2 Diabetes, Gestational Diabetes, Hypothyroidism, Hyperthyroidism, Thyroid nodules, Osteoporosis, Pituitary & Adrenal disorders, and metabolic obesity.",
        preparation: "Fasting for 10-12 hours is recommended if you wish to combine your consultation with fasting blood glucose, HbA1c, or thyroid hormone panels.",
        features: [
          "Comprehensive diabetes control (Type 1, Type 2, Gestational)",
          "Thyroid disorder evaluation (Hypo/Hyperthyroidism & Goiter)",
          "Hormone assay analysis with certified automated lab testing",
          "Personalized dietary counseling & insulin titration"
        ],
        benefits: [
          "Long-term prevention of diabetic kidney, eye & nerve complications",
          "Precise hormone balancing for sustained energy and health",
          "Integrated on-site lab report review during the same visit"
        ]
      },
      {
        index: 6,
        title: "Cardiology",
        titleNepali: "मुटुरोग विशेषज्ञ सेवा",
        subtitle: "Comprehensive Cardiovascular Evaluations & Heart Disease Prevention",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Heart Care",
        badgeNepali: "मुटुरोग",
        icon: "fa-heart-pulse",
        turnaround: "Specialist Cardiology OPD",
        image: ["assets/images/home-page/services/eco.jpg"],
        content: "Our Cardiology department is staffed by senior consultant cardiologists dedicated to the prevention, early detection, and clinical management of cardiovascular diseases. We provide diagnostic evaluations for coronary artery disease, hypertension, heart rhythm disorders (arrhythmias), heart failure, valvular heart diseases, and post-angioplasty/bypass recovery.",
        preparation: "Wear comfortable attire. Avoid heavy caffeine intake immediately prior to ECG, Echocardiogram, or BP evaluations.",
        features: [
          "Expert clinical consultation for chest discomfort & palpitations",
          "Comprehensive hypertension & cholesterol risk management",
          "Immediate on-site 12-Lead ECG & Echocardiography access",
          "24-Hour Ambulatory BP & Holter monitoring support"
        ],
        benefits: [
          "Direct consultation with MD Cardiologists",
          "Fast-track cardiac diagnostics under one single roof",
          "Proactive stroke & heart attack risk prevention strategies"
        ]
      },
      {
        index: 7,
        title: "Pulmonology (Pulmonary)",
        titleNepali: "छाती तथा श्वासप्रश्वास रोग",
        subtitle: "Specialized Respiratory Care for Asthma, COPD, Chronic Cough & Lungs",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Respiratory & Lungs",
        badgeNepali: "छाती/श्वासप्रश्वास",
        icon: "fa-lungs",
        turnaround: "Pulmonology OPD",
        image: ["assets/images/home-page/services/digitalXray.jpg"],
        content: "Our Pulmonology (Chest & Respiratory Medicine) clinic provides expert care for acute and chronic conditions of the respiratory system. Pulmonologists treat Bronchial Asthma, Chronic Obstructive Pulmonary Disease (COPD), chronic cough, pneumonia, bronchitis, post-COVID respiratory issues, allergic rhinitis, and sleep apnea.",
        preparation: "Please bring details of current inhalers, nebulizers, or allergy medications. Recent chest X-rays or CT scans should be presented.",
        features: [
          "Asthma & COPD diagnosis, staging & inhaler optimization",
          "Chronic cough, allergy & respiratory infection management",
          "Pneumonia & post-viral pulmonary recovery care",
          "Linkage with low-radiation digital chest radiography"
        ],
        benefits: [
          "Improved lung capacity and breath control",
          "Effective asthma action plans reducing acute flare-ups",
          "Clean, well-ventilated clinical consultation chambers"
        ]
      },
      {
        index: 8,
        title: "ENT (Ear, Nose & Throat)",
        titleNepali: "नाक, कान तथा घाँटी रोग",
        subtitle: "Specialized Otolaryngology Care for Sinus, Hearing, Throat & Voice",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "ENT Specialty",
        badgeNepali: "नाक, कान, घाँटी",
        icon: "fa-head-side-virus",
        turnaround: "ENT Specialist OPD",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Our ENT (Otolaryngology) department provides advanced diagnosis and treatment for diseases of the ear, nose, throat, and head & neck region. Specialist ENT surgeons treat chronic sinusitis, allergic rhinitis, tonsillitis, ear infections (otitis media), hearing loss, vertigo, voice hoarseness, and nasal polyps, utilizing modern diagnostic video nasopharyngolaryngoscopy.",
        preparation: "No special fasting is required for standard ENT examinations unless scheduled for a specialized endoscopic procedure.",
        features: [
          "Diagnosis of sinusitis, nasal blockage & allergic rhinitis",
          "Ear discharge, otitis media, tinnitus & hearing evaluation",
          "Throat infections, tonsillitis & vocal cord disorder care",
          "Diagnostic Video Nasopharyngolaryngoscopy available"
        ],
        benefits: [
          "Direct visualization with high-definition ENT endoscopes",
          "Relief from chronic sinusitis and recurring throat pain",
          "Specialized pediatric and adult ENT treatment protocols"
        ]
      },
      {
        index: 9,
        title: "Dermatology & Venereal Diseases",
        titleNepali: "छाला, यौन तथा कपाल रोग",
        subtitle: "Clinical Skin Health, Allergy, Acne, Hair, Nail & STD Care",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Skin & Hair",
        badgeNepali: "छाला तथा यौन",
        icon: "fa-hand-dots",
        turnaround: "Dermatology OPD",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Our Dermatology and Venereology department offers comprehensive clinical care for conditions affecting the skin, hair, nails, and sexually transmitted diseases. Dermatologists provide effective, evidence-based treatments for acne, eczema, psoriasis, fungal infections, dermatitis, vitiligo, hair fall (alopecia), urticaria, and confidential STD screening.",
        preparation: "Avoid applying heavy makeup, medicated ointments, or concealers to the affected skin area on the day of consultation.",
        features: [
          "Evidence-based acne, eczema, psoriasis & dermatitis care",
          "Fungal & bacterial skin infection diagnosis & therapy",
          "Hair loss, dandruff & nail disorder management",
          "Confidential screening & treatment for venereal diseases"
        ],
        benefits: [
          "Safe, clinically proven dermatological prescriptions",
          "Private, strictly confidential patient consultations",
          "Long-term solutions for chronic skin allergies and acne"
        ]
      },
      {
        index: 10,
        title: "General Surgery",
        titleNepali: "जनरल सर्जरी तथा शल्यक्रिया",
        subtitle: "Surgical Consultations, Minor Procedures & Post-Operative Wound Care",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Surgical Clinic",
        badgeNepali: "शल्यक्रिया परामर्श",
        icon: "fa-scissors",
        turnaround: "General Surgery OPD",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Our General Surgery outpatient clinic is led by experienced general and laparoscopic surgeons. The clinic provides expert surgical consultations, pre-operative evaluations, post-surgical follow-ups, and minor surgical procedures including abscess drainage, sebaceous cyst excision, mole removal, ingrown toenail excision, minor suturing, and chronic wound dressing.",
        preparation: "Bring all previous surgical records, discharge summaries, and biopsy reports for surgical evaluation.",
        features: [
          "Consultation for hernia, gallstones, appendicitis & hemorrhoids",
          "Minor surgical procedures (cyst removal, abscess drainage)",
          "Sterile diabetic wound care, dressing & suture removal",
          "Pre-operative health clearances & post-operative reviews"
        ],
        benefits: [
          "100% sterile procedure rooms ensuring patient safety",
          "Thorough pre-surgical counseling and guidance",
          "Gentle and hygienic wound management"
        ]
      },
      {
        index: 11,
        title: "Nephrology",
        titleNepali: "मिर्गौला रोग विशेषज्ञ सेवा",
        subtitle: "Kidney Health, Renal Function Monitoring & Hypertension Control",
        category: "Specialist Services",
        categoryType: "specialist",
        badge: "Kidney & Renal",
        badgeNepali: "मिर्गौला रोग",
        icon: "fa-capsules",
        turnaround: "Nephrology OPD",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Our Nephrology specialty department focuses on the preservation of kidney function and the clinical management of renal conditions. Consultant nephrologists diagnose and treat Chronic Kidney Disease (CKD), acute kidney injury, diabetic nephropathy, glomerulonephritis, urinary protein loss (proteinuria), electrolyte disorders, and secondary hypertension.",
        preparation: "Fasting may be requested if you are combining your visit with renal function tests (Serum Creatinine, Urea, Uric Acid, Electrolytes) and Urine R/E.",
        features: [
          "Early detection & staging of Chronic Kidney Disease (CKD)",
          "Diabetic nephropathy & hypertensive renal care",
          "Proteinuria, hematuria & recurrent urinary infection therapy",
          "Comprehensive Renal Function Testing & Ultrasound support"
        ],
        benefits: [
          "Targeted protocols to slow CKD progression and preserve kidneys",
          "Integrated electrolyte and automated creatinine lab monitoring",
          "Specialized nephrology diet and fluid intake guidance"
        ]
      },

      // ==========================================
      // 02 — DIAGNOSTIC SERVICES (Indices 12 - 23)
      // ==========================================
      {
        index: 12,
        title: "Advanced Pathology Laboratory",
        titleNepali: "अत्याधुनिक प्याथोलोजी ल्याब",
        subtitle: "Automated Clinical Biochemistry, Hematology, Microbiology & Hormones",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "Clinical Lab",
        badgeNepali: "प्याथोलोजी ल्याब",
        icon: "fa-flask-vial",
        turnaround: "Same-Day (2 - 4 Hours)",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Our pathology laboratory is equipped with state-of-the-art automated clinical biochemistry and hematology analyzers. Operating under stringent internal quality control protocols, we perform routine blood counts (CBC), lipid profiles, liver & kidney panels, thyroid assays, glycated hemoglobin (HbA1c), infectious disease serology, urine/stool microscopy, and microbiology culture & sensitivity.",
        preparation: "For fasting profiles (Lipid Profile, Fasting Blood Sugar), a 10-12 hour overnight fast is required. Water intake is allowed.",
        features: [
          "Fully automated clinical chemistry & hematology analyzers",
          "Hormonal assays, thyroid profiles & vitamin screenings",
          "Microbiology, urine/stool testing & culture sensitivity",
          "Verified digital PDF report delivery on WhatsApp & email"
        ],
        benefits: [
          "High accuracy verified by certified medical lab technologists",
          "Fast barcoded sample tracking minimizing patient wait times",
          "Comfortable, hygienic sample collection counters"
        ]
      },
      {
        index: 13,
        title: "Digital X-Ray",
        titleNepali: "डिजिटल एक्सरे सेवा",
        subtitle: "High-Resolution, Low-Radiation Skeletal & Chest Radiography",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "Radiography",
        badgeNepali: "डिजिटल एक्सरे",
        icon: "fa-x-ray",
        turnaround: "Instant Film & Report (30 Mins)",
        image: ["assets/images/home-page/services/digitalXray.jpg"],
        content: "Equipped with modern high-frequency digital radiography technology, our X-Ray suite captures crisp, high-contrast skeletal, joint, spinal, and chest images with significantly reduced radiation exposure. It enables immediate detection of fractures, bone infections, joint arthritis, pneumonia, cardiomegaly, and occupational lung conditions.",
        preparation: "No fasting needed. Patients will be asked to remove metallic jewelry, belts, and metal-fastened clothing.",
        features: [
          "Ultra-low radiation dosage ensuring optimal patient safety",
          "Chest, spine, pelvis, extremities & joint radiography",
          "High-definition digital image enhancement for subtle fractures",
          "Instant digital review and high-grade physical film output"
        ],
        benefits: [
          "Quick scan time — completed within 5 minutes",
          "Instant availability for orthopedic and general OPD doctors",
          "Clean, spacious, and patient-friendly imaging room"
        ]
      },
      {
        index: 14,
        title: "Ultrasound (USG)",
        titleNepali: "भिडियो एक्सरे (युएसजी)",
        subtitle: "High-Definition Diagnostic Ultrasound & Color Doppler Sonography",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "Sonography",
        badgeNepali: "भिडियो एक्सरे",
        icon: "fa-wave-square",
        turnaround: "Report within 30 - 45 Minutes",
        image: ["assets/images/home-page/services/ultraSono2.jpg"],
        content: "Pranjal’s ultrasonography unit utilizes advanced diagnostic ultrasound and color Doppler equipment operated by certified sonologists. We offer comprehensive examinations of the whole abdomen, pelvis, obstetric pregnancy scans (anomaly & growth), thyroid, breast, scrotum, and peripheral vascular Doppler studies.",
        preparation: "For Whole Abdomen/Pelvis scans: 6-8 hours fasting and a full bladder (drink 3-4 glasses of water 1 hour prior) is required.",
        features: [
          "Whole abdomen & pelvic organ diagnostic sonography",
          "Obstetric wellbeing scans (Antenatal growth & anomaly)",
          "Thyroid, breast, scrotal & soft-tissue ultrasound",
          "Color Doppler vascular studies (Arterial & Venous)"
        ],
        benefits: [
          "Completely safe, painless, and zero radiation",
          "Accurate detection of gallstones, renal stones, and cysts",
          "Private, comfortable screening suite with caring sonologists"
        ]
      },
      {
        index: 15,
        title: "Physiotherapy & Rehabilitation",
        titleNepali: "फिजियोथेरापी तथा पुनर्स्थापना",
        subtitle: "Advanced Pain Management, Post-Surgical & Neuro Rehabilitation",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "Rehabilitation",
        badgeNepali: "फिजियोथेरापी",
        icon: "fa-person-walking",
        turnaround: "Daily & Custom Session Schedules",
        image: ["assets/images/home-page/services/physio.jpg"],
        content: "Our Physiotherapy and Rehabilitation unit provides tailored physical therapy for musculoskeletal pain, cervical/lumbar spondylosis, knee osteoarthritis, sports injuries, frozen shoulder, stroke recovery, and post-fracture stiffness. We utilize modern electrotherapy (IFT, TENS, Ultrasound), cervical/lumbar traction, manual joint mobilization, and therapeutic exercise.",
        preparation: "Wear loose, comfortable clothing that allows easy joint and muscle movement during therapy sessions.",
        features: [
          "Electrotherapy (IFT, TENS, Therapeutic Ultrasound, Traction)",
          "Manual joint mobilization & myofascial trigger point release",
          "Post-surgical orthopedic & joint replacement rehab",
          "Neurological & stroke mobility recovery programs"
        ],
        benefits: [
          "Drug-free, long-lasting pain relief and mobility recovery",
          "One-on-one attention from licensed physiotherapists",
          "Convenient morning and evening session slots"
        ]
      },
      {
        index: 16,
        title: "Uroflowmetry",
        titleNepali: "युरोफ्लोमेट्री (पिसाबको बहाव जाँच)",
        subtitle: "Non-Invasive Urological Diagnostic Test Assessing Urinary Flow Rate & Bladder Function",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "Urology Test",
        badgeNepali: "युरोफ्लोमेट्री",
        icon: "fa-chart-simple",
        turnaround: "Instant Automated Graph Report",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Uroflowmetry is a simple, non-invasive diagnostic screening that measures the volume of urine excreted over time, flow rate in milliliters per second, and duration of voiding. It is invaluable for diagnosing benign prostatic hyperplasia (BPH) in men, urinary strictures, bladder muscle weakness, and urinary outflow obstructions.",
        preparation: "Patients should arrive with a comfortably full bladder. Drink 3-4 glasses of water roughly 1 hour before the test.",
        features: [
          "Precise digital recording of peak flow rate (Qmax) & average flow",
          "Automated flow pattern graphing for obstruction diagnosis",
          "Non-invasive, private, and rapid procedure",
          "Essential evaluation for enlarged prostate (BPH) & bladder issues"
        ],
        benefits: [
          "Completely painless with zero discomfort",
          "Instant graphical printout for urologist review",
          "Private, dedicated testing washroom facility"
        ]
      },
      {
        index: 17,
        title: "Nasopharyngolaryngoscopy",
        titleNepali: "भिडियो इन्डोस्कोपी (नाक, घाँटी तथा भोकल कर्ड)",
        subtitle: "High-Definition Video Endoscopic Examination of Nose, Pharynx & Vocal Cords",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "ENT Endoscopy",
        badgeNepali: "इन्डोस्कोपी",
        icon: "fa-video",
        turnaround: "Immediate Endoscopic Video & Report",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Flexible Nasopharyngolaryngoscopy is an advanced diagnostic procedure in which a thin, flexible fiberoptic/video scope is gently passed through the nose to visualize the nasal cavities, nasopharynx, adenoids, base of the tongue, pharynx, and vocal cords in high definition. It aids in diagnosing chronic sinusitis, nasal polyps, adenoid hypertrophy, voice hoarseness, vocal nodules, and throat lesions.",
        preparation: "Avoid heavy eating 2 hours before the examination. A gentle local topical decongestant/anesthetic spray is applied for comfort.",
        features: [
          "High-definition flexible fiberoptic video visualization",
          "Evaluation of nasal polyps, deviated septum & adenoids",
          "Vocal cord mobility assessment & throat lesion detection",
          "Conducted directly by experienced ENT specialists"
        ],
        benefits: [
          "Takes only a few minutes with minimal discomfort",
          "Clear visual evidence shared directly with the patient",
          "Instant diagnostic report for targeted ENT treatment"
        ]
      },
      {
        index: 18,
        title: "Echocardiogram (Echo)",
        titleNepali: "इकोकार्डियोग्राफी (मुटुको भिडियो एक्सरे / इको)",
        subtitle: "Color Doppler Cardiovascular Ultrasound Assessing Heart Chambers & Valves",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "Cardiac Echo",
        badgeNepali: "मुटुको इको",
        icon: "fa-heart-pulse",
        turnaround: "Same-Day Report by Cardiologist",
        image: ["assets/images/home-page/services/eco.jpg"],
        content: "Echocardiography (Echo) is a specialized cardiac ultrasound that generates real-time, moving images of heart chambers, valves, and major blood vessels. Using color Doppler technology, our cardiologists calculate cardiac ejection fraction (pumping capacity), identify heart valve stenosis or regurgitation, assess heart enlargement, and screen for congenital heart defects.",
        preparation: "No prior fasting needed. Wear comfortable two-piece clothing for easy access to the chest area.",
        features: [
          "Transthoracic Color Doppler Echocardiogram",
          "Left ventricular ejection fraction & chamber size calculation",
          "Heart valve regurgitation, stenosis & structural analysis",
          "Performed and signed directly by Senior Cardiologists"
        ],
        benefits: [
          "Safe, radiation-free, and completely non-invasive",
          "Crucial test for hypertension, breathlessness & chest pain",
          "Direct consultation and guidance from the cardiologist"
        ]
      },
      {
        index: 19,
        title: "Endoscopy (Upper GI)",
        titleNepali: "इन्डोस्कोपी (माथिल्लो पेट जाँच)",
        subtitle: "Diagnostic Esophagogastroduodenoscopy for Ulcers, Reflux & Stomach Conditions",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "Upper Endoscopy",
        badgeNepali: "इन्डोस्कोपी",
        icon: "fa-magnifying-glass-chart",
        turnaround: "Immediate Post-Procedure Report",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Upper Gastrointestinal Endoscopy (Gastroscopy) is a diagnostic procedure where a slender, flexible tube with a high-resolution camera is guided through the mouth to examine the lining of the esophagus, stomach, and duodenum. It is the gold-standard test for investigating persistent acid reflux, difficulty swallowing, chronic stomach pain, peptic ulcers, H. pylori infection, and occult upper GI bleeding.",
        preparation: "Strict 6-8 hours of overnight fasting (no food or drinks) prior to the morning procedure is mandatory.",
        features: [
          "High-definition video visualization of the upper digestive tract",
          "Detection of gastritis, peptic ulcers, GERD & H. pylori",
          "Painless procedure under mild local throat spray/sedation",
          "Rapid biopsy sampling if indicated"
        ],
        benefits: [
          "Gold standard diagnostic accuracy for stomach symptoms",
          "Performed in a sterile, equipped endoscopy suite",
          "Comprehensive visual report provided immediately"
        ]
      },
      {
        index: 20,
        title: "Colonoscopy",
        titleNepali: "कोलोनोस्कोपी (ठूलो आन्द्रा जाँच)",
        subtitle: "Comprehensive Lower Gastrointestinal Endoscopic Screening & Evaluation",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "Lower GI Diagnostic",
        badgeNepali: "कोलोनोस्कोपी",
        icon: "fa-clipboard-check",
        turnaround: "Immediate Post-Procedure Report",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Colonoscopy is a diagnostic examination of the large intestine (colon) and rectum using a flexible video colonoscope. It allows gastroenterologists to inspect the entire colon lining to investigate chronic diarrhea, unexplained rectal bleeding, persistent abdominal cramps, inflammatory bowel disease (Ulcerative Colitis/Crohn’s), and screen for colon polyps.",
        preparation: "Specific bowel preparation medication and dietary instructions will be provided by our clinical staff 24 hours in advance.",
        features: [
          "Full visualization of the rectum, sigmoid & whole colon",
          "Detection of polyps, colitis, diverticula & bleeding sources",
          "Performed with modern video colonoscopes under patient comfort",
          "Targeted tissue biopsy capability"
        ],
        benefits: [
          "Critical preventative screening for lower GI health",
          "Safe, supervised clinical environment with monitoring",
          "Detailed endoscopic photography and diagnostic findings"
        ]
      },
      {
        index: 21,
        title: "Electrocardiogram (ECG)",
        titleNepali: "इसिजी सेवा (मुटुको धड्कन जाँच)",
        subtitle: "12-Lead Rapid Cardiac Rhythm & Electrical Conduction Analysis",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "12-Lead ECG",
        badgeNepali: "इसिजी",
        icon: "fa-heart-pulse",
        turnaround: "Immediate (10 - 15 Minutes)",
        image: ["assets/images/home-page/services/ECG.jpg"],
        content: "A 12-lead digital Electrocardiogram (ECG) is the foundational test for recording the electrical signals of the heart. It provides rapid evaluation for acute chest pain, palpitations, irregular heartbeat (arrhythmias), heart muscle strain, prior or acute heart attacks, and conduction blocks. It is also an essential component of routine health checks and pre-surgical clearances.",
        preparation: "No fasting required. Avoid applying oily lotions or creams to your chest on the test day.",
        features: [
          "High-sensitivity 12-lead digital electrical rhythm recording",
          "Instant detection of tachycardia, bradycardia & arrhythmias",
          "Essential baseline check for hypertensive and cardiac patients",
          "Immediate cardiologist interpretation available"
        ],
        benefits: [
          "Quick 5-minute painless diagnostic recording",
          "Instant printout and digital storage",
          "Affordable vital screening for all age groups"
        ]
      },
      {
        index: 22,
        title: "Ambulatory Blood Pressure Monitoring (ABP)",
        titleNepali: "एबीपी (२४-घण्टे रक्तचाप निगरानी)",
        subtitle: "24-Hour Continuous Automated Blood Pressure Tracking for Accurate Hypertension Assessment",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "24h ABP",
        badgeNepali: "२४ घण्टे रक्तचाप",
        icon: "fa-gauge-high",
        turnaround: "24-Hour Recording & Analysis",
        image: ["assets/images/home-page/services/service1.jpg"],
        content: "Ambulatory Blood Pressure Monitoring (ABPM) measures blood pressure at regular automated intervals (every 15-30 minutes) over a full 24-hour day-and-night cycle while you go about your normal daily activities. It eliminates 'white-coat hypertension' (high clinic BP due to anxiety), detects 'masked hypertension', monitors nocturnal BP dipping, and assesses how well BP medications work throughout the entire 24 hours.",
        preparation: "Wear a loose-fitting short-sleeved shirt so the compact digital cuff can be comfortably worn on your upper arm.",
        features: [
          "24-Hour continuous automated BP measurements during day & sleep",
          "Accurate differentiation of white-coat and true hypertension",
          "Detection of nocturnal non-dipping BP risk factors",
          "Detailed computerized summary graph and mean pressure analysis"
        ],
        benefits: [
          "Gold standard method for precise hypertension diagnosis",
          "Prevents unnecessary or inaccurate medication dosing",
          "Lightweight, quiet, and comfortable wearable device"
        ]
      },
      {
        index: 23,
        title: "Holter Monitoring",
        titleNepali: "होल्टर मोनिटरिङ (२४-४८ घण्टे मुटुको धड्कन जाँच)",
        subtitle: "24 to 48-Hour Continuous Ambulatory ECG Monitoring for Palpitations & Arrhythmias",
        category: "Diagnostic Services",
        categoryType: "diagnostic",
        badge: "24h/48h Holter",
        badgeNepali: "होल्टर मोनिटरिङ",
        icon: "fa-heart-circle-bolt",
        turnaround: "24 - 48 Hour Continuous Recording",
        image: ["assets/images/home-page/services/eco.jpg"],
        content: "Holter Monitoring is a continuous, wearable cardiac ECG recording device worn for 24 to 48 hours to record every heartbeat as you work, exercise, and sleep. Because standard resting ECGs only record for 10 seconds, a Holter monitor is essential for catching transient, intermittent heart rhythm abnormalities, skipped beats, unexplained fainting (syncope), dizziness, and paroxysmal arrhythmias.",
        preparation: "Shower prior to fitting the device, as the monitor and chest electrodes must stay dry throughout the 24-48 hour recording.",
        features: [
          "24 to 48 hours continuous multi-channel ECG recording",
          "Captures intermittent palpitations, PVCs, PACs & atrial fibrillation",
          "Patient activity & symptom diary correlation",
          "Advanced computerized rhythm scanning and cardiologist review"
        ],
        benefits: [
          "Detects hidden arrhythmias missed by standard 10-second ECGs",
          "Lightweight, discreet device easily worn under regular clothes",
          "Invaluable clarity for unexplained dizziness or palpitations"
        ]
      }
    ];
  }

  getServices(length: number = 0): IServices[] {
    if (!length) {
      return this.services;
    } else {
      return this.services.filter(x => x.index < length);
    }
  }

  getSpecialistServices(): IServices[] {
    return this.services.filter(x => x.categoryType === 'specialist');
  }

  getDiagnosticServices(): IServices[] {
    return this.services.filter(x => x.categoryType === 'diagnostic');
  }

  getServiceByIndexNo(index: number): IServices | undefined {
    return this.services.find(x => x.index === index);
  }
}
