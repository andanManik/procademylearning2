import { Component, OnInit } from '@angular/core';
// import { CoursesService } from '../Services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  courses = [];

  ngOnInit(): void {
   // this.courses = this.coursesService.courses;
  }

}
