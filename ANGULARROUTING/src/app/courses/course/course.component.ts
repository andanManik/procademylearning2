import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/course.service';
//import { CoursesService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[CoursesService,ActivatedRoute]
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor( private activatedRoute: ActivatedRoute,private service: CoursesService) { }

courseId:number=0
course:{id:number, name:string, author:string, duration:number, type:string, 
    price: number, ratings:number, image:string, description:string}= 
    {id:0, name:'', author:'', duration:0, type:'', 
      price: 0, ratings:0, image:'', description:''}

courses=[];

  // routeParamsObservable;
  isEditMode: boolean = false

  ngOnInit(): void {    

    this.courseId = this.activatedRoute.snapshot.params['id'];

    // this.courseId = this.route.snapshot.paramMap.get('id')
     this.course=this.service.courses.find(x=>x.id == this.courseId)  ;  

    // this.routeParamsObservable=this.route.paramMap.subscribe((param)=>{
    //   this.courseId = param.get('id');
    this.courses=  this.activatedRoute.snapshot.data['courses']      
    // })
  }
  onEditCourse(){
    this.isEditMode=true;
  }
  ngOnDestroy(){
   // this.routeParamsObservable.unsubscribe();
  }

}
