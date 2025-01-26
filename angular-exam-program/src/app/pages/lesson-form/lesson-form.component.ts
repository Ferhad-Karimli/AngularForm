import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css'],
})
export class LessonFormComponent implements OnInit {
  lessonForm: FormGroup = this.fb.group({});
  requiredErrorMessage = 'This field is required.';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.lessonForm = this.fb.group({
      lessonCode: ['', [Validators.required, Validators.maxLength(3)]],
      lessonName: ['', [Validators.required, Validators.maxLength(30)]],
      classNumber: ['', [Validators.required, Validators.maxLength(2)]],
      teacherFirstName: ['', [Validators.required, Validators.maxLength(20)]],
      teacherLastName: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }
  onSubmit(): void {
    alert('Formunuz dərc olundu !');
  }
}
