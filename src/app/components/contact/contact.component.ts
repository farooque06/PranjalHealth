import { Component, OnInit } from '@angular/core';

export interface IDepartmentContact {
  id: string;
  name: string;
  badge: string;
  icon: string;
  themeColor: 'teal' | 'coral' | 'blue' | 'purple' | 'green' | 'amber';
  location: string;
  phoneNumbers: { number: string; formatted: string; label: string }[];
  description: string;
  whatsappMessage: string;
  whatsappNumber: string;
  email?: string;
  timing: string;
}

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class ContactComponent implements OnInit {

  departmentContacts: IDepartmentContact[] = [
    {
      id: 'general',
      name: 'General Inquiries & Reception',
      badge: 'Ground Floor',
      icon: 'fa-hospital',
      themeColor: 'teal',
      location: 'Ground Floor, Main Reception Desk',
      phoneNumbers: [
        { number: '01-4994108', formatted: '01-4994108', label: 'Landline Desk' },
        { number: '+9779865370270', formatted: '+977-9865370270', label: 'Helpline' }
      ],
      description: 'General center inquiries, patient registration, center location directions, and general guidance.',
      whatsappNumber: '9779865370270',
      whatsappMessage: 'Hello Pranjal Healthcare, I have a general inquiry about your services.',
      email: 'pranjaldhc@gmail.com',
      timing: 'Sun - Fri: 7:00 AM - 7:00 PM'
    },
    {
      id: 'lab',
      name: 'Pathology & Lab Reports Desk',
      badge: '1st Floor Lab',
      icon: 'fa-flask-vial',
      themeColor: 'coral',
      location: '1st Floor, Clinical Pathology Wing',
      phoneNumbers: [
        { number: '+9779865370270', formatted: '+977-9865370270', label: 'WhatsApp & Call' },
        { number: '01-5910285', formatted: '01-5910285', label: 'Direct Lab Line' }
      ],
      description: 'Digital WhatsApp report delivery, blood test fasting preparation, and home sample collection inquiries.',
      whatsappNumber: '9779865370270',
      whatsappMessage: 'Hello, I would like to inquire about my lab report status / blood test preparation.',
      timing: 'Daily: 7:00 AM - 7:00 PM'
    },
    {
      id: 'radiology',
      name: 'Radiology & Imaging (X-Ray / USG / ECG)',
      badge: '2nd Floor Imaging',
      icon: 'fa-x-ray',
      themeColor: 'blue',
      location: '2nd Floor, Radiology & Ultrasonography Wing',
      phoneNumbers: [
        { number: '01-4994108', formatted: '01-4994108', label: 'Imaging Desk' },
        { number: '+9779865370270', formatted: '+977-9865370270', label: 'Direct Line' }
      ],
      description: 'Ultrasound (USG) slot reservations, Digital X-Ray inquiries, 4D Echocardiography, and ECG timings.',
      whatsappNumber: '9779865370270',
      whatsappMessage: 'Hello, I would like to inquire about ultrasound / digital X-Ray appointment availability.',
      timing: 'Sun - Fri: 8:00 AM - 6:00 PM'
    },
    {
      id: 'doctors',
      name: 'Doctor OPD Appointments & Consultations',
      badge: '3rd Floor OPD',
      icon: 'fa-user-doctor',
      themeColor: 'purple',
      location: '3rd Floor, Specialist OPD Chambers',
      phoneNumbers: [
        { number: '01-4994108', formatted: '01-4994108', label: 'OPD Appointments' },
        { number: '+9779865370270', formatted: '+977-9865370270', label: 'Mobile Booking' }
      ],
      description: 'Specialist appointments for Gynecology, Orthopedics, Cardiology, Pediatrics, ENT, Dermatology & Medicine.',
      whatsappNumber: '9779865370270',
      whatsappMessage: 'Hello, I would like to book an appointment with a specialist doctor.',
      timing: 'Daily Morning & Evening OPD'
    },
    {
      id: 'pharmacy',
      name: 'On-Site Pharmacy & Medicine Desk',
      badge: 'Ground Floor',
      icon: 'fa-pills',
      themeColor: 'green',
      location: 'Ground Floor, Beside Main Entrance',
      phoneNumbers: [
        { number: '+9779865370270', formatted: '+977-9865370270', label: 'Pharmacy Desk' }
      ],
      description: 'Prescription medicine availability, vaccines, health supplements, and medicine delivery support.',
      whatsappNumber: '9779865370270',
      whatsappMessage: 'Hello, I want to check medicine availability at the pharmacy.',
      timing: 'Sun - Fri: 7:00 AM - 7:30 PM'
    },
    {
      id: 'emergency',
      name: 'Urgent Care',
      badge: 'Helpline Desk',
      icon: 'fa-truck-medical',
      themeColor: 'amber',
      location: 'Ground Floor / On-Call Service',
      phoneNumbers: [
        { number: '+9779865370270', formatted: '+977-9865370270', label: '24/7 Mobile Hotline' }
      ],
      description: 'Immediate first aid assistance, home blood sample pickup booking, and emergency guidance.',
      whatsappNumber: '9779865370270',
      whatsappMessage: 'Hello, I need home blood sample collection / urgent assistance.',
      timing: 'Available 7 Days A Week'
    }
  ];

  faqs = [
    {
      question: 'How do I receive my diagnostic lab reports digitally?',
      answer: 'Our laboratory automatically sends verified PDF test reports directly to your registered WhatsApp number and email as soon as they are signed by our pathologists. You can also pick up crisp physical printed copies anytime from our ground floor reception.'
    },
    {
      question: 'Do I need prior booking for blood tests and digital X-Ray?',
      answer: 'No appointment is needed for routine blood tests, urine/stool analysis, or digital X-Rays. You can walk in anytime between 7:00 AM to 7:00 PM (Sunday through Friday). For fasting tests, please maintain a 10-12 hour overnight fast.'
    },
    {
      question: 'How can I schedule an appointment with a specialist doctor?',
      answer: 'You can call our OPD appointments desk directly at 01-4994108 or message us on WhatsApp at +977-9865370270. Our coordinators will confirm the doctor’s schedule and reserve your slot.'
    },
    {
      question: 'Is home sample collection available for elderly or unwell patients?',
      answer: 'Yes! We provide prompt, hygienic home sample collection within Kathmandu/Pepsicola area. Simply call or WhatsApp +977-9865370270 to schedule a convenient morning phlebotomist visit.'
    }
  ];

  activeFaqIndex: number | null = 0;

  constructor() {}

  ngOnInit(): void {}

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  getWhatsAppLink(phone: string, text: string): string {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${phone}?text=${encoded}`;
  }
}
