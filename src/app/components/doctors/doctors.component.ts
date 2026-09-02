import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctors } from 'src/app/interfaces/service.interface';
import { DoctorsService } from 'src/app/services/doctors.service';
import { ImagePlaceholderService } from 'src/app/services/image-placeholder.service';

@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss'],
    standalone: false
})
export class DoctorsComponent implements OnInit {
  doctors: IDoctors[] = [];
  filteredDoctors: IDoctors[] = [];
  departments: string[] = [];
  selectedDepartment: string = 'All';
  searchQuery: string = '';
  placeholderImage: string = '';
  showFilters: boolean = false;

  constructor(
    private doctorsService: DoctorsService,
    private router: Router,
    private imagePlaceholderService: ImagePlaceholderService
  ) {}

  ngOnInit(): void {
    this.doctors = this.doctorsService.getDoctors();
    this.filteredDoctors = this.doctors;
    this.departments = ['All', ...this.doctorsService.getDepartments()];
    this.placeholderImage = this.imagePlaceholderService.getDoctorPlaceholder();
  }

  onSearchChange(): void {
    this.filterDoctors();
  }

  setDepartment(dept: string): void {
    this.selectedDepartment = dept;
    this.filterDoctors();
  }

  filterDoctors(): void {
    let result = this.doctors;

    // Filter by department
    if (this.selectedDepartment !== 'All') {
      result = result.filter(d => d.department === this.selectedDepartment);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(d =>
        d.title.toLowerCase().includes(q) ||
        (d.titleNepali && d.titleNepali.toLowerCase().includes(q)) ||
        d.content.toLowerCase().includes(q) ||
        (d.contentNepali && d.contentNepali.toLowerCase().includes(q)) ||
        (d.department && d.department.toLowerCase().includes(q)) ||
        (d.departmentNepali && d.departmentNepali.toLowerCase().includes(q)) ||
        (d.education && d.education.some(edu => edu.toLowerCase().includes(q))) ||
        (d.specializations && d.specializations.some(spec => spec.toLowerCase().includes(q)))
      );
    }

    this.filteredDoctors = result;
  }

  clearFilters(): void {
    this.selectedDepartment = 'All';
    this.searchQuery = '';
    this.filteredDoctors = this.doctors;
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  showDetails(index: number): void {
    this.router.navigate(["doctors-details", index]);
  }

  onImageError(event: any): void {
    event.target.src = this.placeholderImage;
  }
}
