import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamFormComponent } from './pages/exam-form/exam-form.component';
import { LessonFormComponent } from './pages/lesson-form/lesson-form.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';

const routes: Routes = [
  { path: 'exam-form', component: ExamFormComponent },
  { path: 'lesson-form', component: LessonFormComponent },
  { path: 'student-form', component: StudentFormComponent },
  { path: '', redirectTo: '/lesson-form', pathMatch: 'full' }, // Redirect to lesson-form by default
  { path: '**', redirectTo: '/lesson-form' }, // Redirect unknown paths to lesson-form
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
