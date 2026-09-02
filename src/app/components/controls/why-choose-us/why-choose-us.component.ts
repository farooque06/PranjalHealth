import { Component, OnInit } from '@angular/core';

interface IPillar {
  icon: string;
  iconBgClass: string;
  title: string;
  desc: string;
}

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss'],
    standalone: false
})
export class WhyChooseUsComponent implements OnInit {

  pillars: IPillar[] = [
    {
      icon: 'fa-solid fa-microscope',
      iconBgClass: 'icon-teal',
      title: 'Automated Precision',
      desc: 'Advanced automated analyzers ensuring 100% accurate results.'
    },
    {
      icon: 'fa-solid fa-bolt',
      iconBgClass: 'icon-coral',
      title: 'Same-Day Reports',
      desc: 'Quick digital delivery via WhatsApp & Email without delays.'
    },
    {
      icon: 'fa-solid fa-user-doctor',
      iconBgClass: 'icon-blue',
      title: 'MD Doctor Verified',
      desc: 'Every report reviewed & signed by certified MD specialists.'
    },
    {
      icon: 'fa-solid fa-pills',
      iconBgClass: 'icon-emerald',
      title: 'Complete Healthcare Hub',
      desc: 'Diagnostics, doctor OPD clinics, and on-site pharmacy under one roof.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
