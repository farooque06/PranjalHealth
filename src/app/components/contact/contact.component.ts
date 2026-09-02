import { Component, OnInit } from '@angular/core';

export interface IDepartmentContact {
  id: string;
  name: string;
  badge: string;
  icon: string;
  themeColor: 'teal' | 'coral' | 'blue' | 'purple' | 'green' | 'amber';
  location: string;
  phoneNumbers: { number: string; formatted: string; label: string; isWhatsApp?: boolean; note?: string }[];
  description: string;
  whatsappMessage?: string;
  whatsappNumber?: string;
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
      id: 'healthcare-support',
      name: 'Health Care Support Line',
      badge: 'Helpline',
      icon: 'fa-headset',
      themeColor: 'teal',
      location: 'Dedicated Support Desk',
      phoneNumbers: [
        { number: '9851428080', formatted: '9851428080', label: 'Support Line', note: 'No WhatsApp' }
      ],
      description: 'Direct healthcare support assistance for patient care, emergency guidance, and clinical support.',
      timing: 'Sunday - Friday: 7:00 AM - 7:00 PM'
    },
    {
      id: 'general-inquiries',
      name: 'General Inquiries',
      badge: 'Main Reception',
      icon: 'fa-hospital',
      themeColor: 'blue',
      location: 'Ground Floor, Main Reception Desk',
      phoneNumbers: [
        { number: '01-5910285', formatted: '01-5910285', label: 'Landline Desk 1' },
        { number: '01-5905600', formatted: '01-5905600', label: 'Landline Desk 2' },
        { number: '9864156565', formatted: '9864156565', label: 'Mobile & WhatsApp', isWhatsApp: true }
      ],
      description: 'General center inquiries, appointment scheduling, patient registration, and service information.',
      whatsappNumber: '9779864156565',
      whatsappMessage: 'Hello Pranjal Healthcare, I have a general inquiry about your services.',
      email: 'pranjaldhc@gmail.com',
      timing: 'Sunday - Friday: 7:00 AM - 7:00 PM'
    },
    {
      id: 'lab-reports',
      name: 'Lab Reports',
      badge: 'Pathology Lab',
      icon: 'fa-flask-vial',
      themeColor: 'coral',
      location: '1st Floor, Clinical Pathology Wing',
      phoneNumbers: [
        { number: '9864156566', formatted: '9864156566', label: 'Lab Reports & WhatsApp', isWhatsApp: true }
      ],
      description: 'Digital WhatsApp report delivery, blood test fasting preparation, and test inquiries.',
      whatsappNumber: '9779864156566',
      whatsappMessage: 'Hello, I would like to inquire about my lab report status / blood test preparation.',
      timing: 'Daily: 7:00 AM - 7:00 PM'
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy',
      badge: 'Ground Floor',
      icon: 'fa-pills',
      themeColor: 'green',
      location: 'Ground Floor, Beside Main Entrance',
      phoneNumbers: [
        { number: '9865370270', formatted: '9865370270', label: 'Pharmacy & WhatsApp', isWhatsApp: true }
      ],
      description: 'Prescription medicine availability, health supplements, vaccines, and pharmacy support.',
      whatsappNumber: '9779865370270',
      whatsappMessage: 'Hello, I want to check medicine availability at the pharmacy.',
      timing: 'Sunday - Friday: 7:00 AM - 7:30 PM'
    }
  ];

  faqs = [
    {
      question: 'How do I receive my diagnostic lab reports digitally?',
      answer: 'Our laboratory automatically sends verified PDF test reports directly to your WhatsApp (Lab Desk: 9864156566) and email. You can also pick up printed copies anytime from our ground floor reception.'
    },
    {
      question: 'Do I need prior booking for blood tests and digital X-Ray?',
      answer: 'No appointment is needed for routine blood tests, urine/stool analysis, or digital X-Rays. Walk in between 7:00 AM to 7:00 PM (Sunday through Friday). For fasting tests, please maintain a 10-12 hour overnight fast.'
    },
    {
      question: 'How can I reach General Inquiries for doctor appointments?',
      answer: 'You can call our reception desk directly at 01-5910285 or 01-5905600, or message us on WhatsApp at 9864156565. For healthcare support line, dial 9851428080.'
    },
    {
      question: 'How do I contact the on-site Pharmacy?',
      answer: 'For medicine availability, prescriptions, or consultations, call or WhatsApp our pharmacy desk directly at 9865370270.'
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
