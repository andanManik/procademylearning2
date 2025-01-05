import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/course.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
// import { CourseResolveService } from '../Services/course-resolve.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[CoursesService]
})
export class CoursesComponent  {

  constructor(private coursesService: CoursesService, private activatedRoute:ActivatedRoute) { }

 // courses:any
   courses:{id:number, name:string, author:string, duration:number, type:string, 
     price: number, ratings:number, image:string, description:string}[]=
     [{id:0, name:'', author:'', duration:0, type:'', 
       price: 0, ratings:0, image:'', description:''}]
   
  ngOnInit():void {
    // this.courses = this.coursesService.courses;
    //  this.coursesService.getAllCourses().then((data)=>{
    //   this.courses = data;
  this.courses = this.coursesService.courses;
     }
  }


