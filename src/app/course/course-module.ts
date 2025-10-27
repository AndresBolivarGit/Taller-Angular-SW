import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseList } from './course-list/course-list';

@NgModule({
  declarations: [CourseList],
  imports: [CommonModule],
  exports: [CourseList],
})
export class CourseModule {}
