import { Component } from '@angular/core';
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-javascriptcourse',
  templateUrl: './javascriptcourse.component.html',
  styleUrls: ['./javascriptcourse.component.css'],
  providers: [CourseService]
})
export class JavascriptcourseComponent {
  constructor(private courseService: CourseService){
  }
  title: string = "Javascript"
  onClick(){   
    this.courseService.onSubscribeClicked(this.title)
   }
}
