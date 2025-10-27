import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses: Course[] = [];
  seasonsAverage = 0;
  selected?: Course;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      const total = data.reduce((acc, c) => acc + Number(c.seasons), 0);
      this.seasonsAverage = data.length ? Math.round(total / data.length) : 0;
      this.selected = this.courses[0];
    });
  }
  trackById = (_: number, c: Course) => c.id;
  pick(c: Course): void {
    this.selected = c;
  }
}

