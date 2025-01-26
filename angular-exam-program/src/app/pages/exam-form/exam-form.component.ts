import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css'],
})
export class ExamFormComponent implements OnInit {
  examForm: FormGroup = this.fb.group({});
  requiredErrorMessage = 'This field is required.';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.examForm = this.fb.group({
      lessonCode: ['', [Validators.required, Validators.maxLength(3)]],
      studentNumber: ['', [Validators.required, Validators.maxLength(5)]],
      examDate: ['', [Validators.required]],
      examResult: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }
  onSubmit(): void {
    alert('Formunuz dərc olundu !');
  }
}
