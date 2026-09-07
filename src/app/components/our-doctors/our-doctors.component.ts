import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

interface DoctorStat {
  value: number;
  suffix: string;
  label: string;
}

@Component({
    selector: 'app-our-doctors',
    templateUrl: './our-doctors.component.html',
    styleUrls: ['./our-doctors.component.scss'],
    standalone: false
})
export class OurDoctorsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('statsBar', { static: true }) statsBar!: ElementRef<HTMLElement>;

  readonly stats: DoctorStat[] = [
    { value: 25, suffix: '+', label: 'Expert Doctors' },
    { value: 15, suffix: '+', label: 'Specializations' },
    { value: 50, suffix: 'K+', label: 'Patients Treated' },
    { value: 100, suffix: '%', label: 'Patient Satisfaction' }
  ];

  displayedValues: number[] = this.stats.map(() => 0);

  private statsObserver?: IntersectionObserver;
  private animationFrameId?: number;

  ngAfterViewInit(): void {
    this.statsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.animateStats();
        this.statsObserver?.disconnect();
      }
    }, { threshold: 0.35 });

    this.statsObserver.observe(this.statsBar.nativeElement);
  }

  ngOnDestroy(): void {
    this.statsObserver?.disconnect();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private animateStats(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.displayedValues = this.stats.map(stat => stat.value);
      return;
    }

    const startTime = performance.now();
    const duration = 1400;

    const updateValues = (currentTime: number): void => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      this.displayedValues = this.stats.map(stat => Math.round(stat.value * easedProgress));

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(updateValues);
      }
    };

    this.animationFrameId = requestAnimationFrame(updateValues);
  }
}
