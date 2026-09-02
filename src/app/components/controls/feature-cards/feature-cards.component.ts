import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.scss'],
  standalone: false
})
export class FeatureCardsComponent implements OnInit {

  features = [
    {
      icon: 'fa-solid fa-user-doctor',
      iconClass: 'icon-coral',
      tag: 'Medical Team',
      tagClass: 'tag-coral',
      title: 'Specialized Doctors',
      desc: 'Consultation with top specialists in Cardiology, Gynecology, Pediatrics, and General Medicine.',
      link: '/doctors',
      linkText: 'Meet Our Doctors',
      linkClass: 'link-coral'
    },
    {
      icon: 'fa-solid fa-vial-circle-check',
      iconClass: 'icon-teal',
      tag: 'Pathology Lab',
      tagClass: '',
      title: 'Accurate Lab Testing',
      desc: 'Fully automated pathology lab delivering fast, precise blood & diagnostic reports.',
      link: '/services-main',
      linkText: 'Explore Services',
      linkClass: ''
    },
    {
      icon: 'fa-solid fa-x-ray',
      iconClass: 'icon-teal',
      tag: 'Advanced Imaging',
      tagClass: '',
      title: 'Digital X-Ray & USG',
      desc: 'High-resolution Digital X-Ray, 4D Ultrasonography & Echocardiography diagnostic scans.',
      link: '/services-main',
      linkText: 'Learn More',
      linkClass: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
