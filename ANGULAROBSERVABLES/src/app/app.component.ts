import { Component, OnInit } from '@angular/core';
import { Observable,from,map,of,filter} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ANGULAROBSERVABLES';

// myObservable = new Observable((observer)=>{
//   console.log('Observable starts')
//   setTimeout(() => {observer.next("1") }, 1000);
//   setTimeout(() => {observer.next("2") }, 2000);
//   setTimeout(() => {observer.next("3") }, 3000);
//   //setTimeout(() => {observer.error(new Error("Something went wrong. Please try again later!")) }, 3000);
//   setTimeout(() => {observer.next("4") }, 4000);
//   setTimeout(() => {observer.next("5") }, 5000);
//   setTimeout(() => {observer.complete() }, 6000);

//   // observer.next("1");
//   // observer.next("2");
//   // observer.next("3");
//   // observer.next("4");
//   // observer.next("5");
// })



array1 = [1,2,3,4,5];
array2 = ['A','B','C','D','E']


myObservable = from(this.array1);

//Operators are functions that takes observable as argument, and transfrom the given observable to another observable and return
//we can use operators to manipulate the observable.. below example the 'map' operator is ussed to transform the myObservable 
transformedObs = this.myObservable.pipe(map((val)=>{
  return val*5
}))

//below example uses filter() operator to filter the data based on the condition, in the observable

filteredObs = this.transformedObs.pipe(filter((val)=>{
  return val>10;
}))

ngOnInit(){
this.filteredObs.subscribe((val)=>{
  console.log(val);
},(error) => {
  alert(error.message);
},()=>{
  console.log("All data has been emitted.")
})
}
}
