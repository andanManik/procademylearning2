import { Component } from '@angular/core';
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-angularcourse',
  templateUrl: './angularcourse.component.html',
  styleUrls: ['./angularcourse.component.css'],
  providers: [CourseService]
})
export class AngularcourseComponent {
  constructor(private courseService: CourseService){

  }
  title: string = "Angular";
  onClick(){
   this.courseService.onSubscribeClicked(this.title)
  }
}
