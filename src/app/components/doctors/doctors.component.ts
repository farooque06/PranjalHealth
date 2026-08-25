import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctors } from 'src/app/interfaces/service.interface';
import { DoctorsService } from 'src/app/services/doctors.service';

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

  constructor(
    private doctorsService: DoctorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.doctors = this.doctorsService.getDoctors();
    this.filteredDoctors = this.doctors;
    this.departments = ['All', ...this.doctorsService.getDepartments()];
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
        d.content.toLowerCase().includes(q) ||
        (d.department && d.department.toLowerCase().includes(q)) ||
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

  showDetails(index: number): void {
    this.router.navigate(["doctors-details", index]);
  }
}
