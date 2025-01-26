import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup = this.fb.group({});
  requiredErrorMessage = 'This field is required.';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      studentNumber: ['', [Validators.required, Validators.maxLength(5)]],
      studentName: ['', [Validators.required, Validators.maxLength(30)]],
      studentSerName: ['', [Validators.required, Validators.maxLength(30)]],
      studentClass: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }

  onSubmit(): void {
    alert('Formunuz dərc olundu !');
  }
}
