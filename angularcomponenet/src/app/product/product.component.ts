import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
products = [
  {id:1,name:'Minimalist Analog Watch',price:200,color:'Black',available:'Available',image:'/assets/Products/analogWatch.jpg'},
  {id:2,name:'Ultra HD Smart TV',price:200,color:'Black',available:'Not Available',image:'/assets/Products/Television.jpg'},
  {id:3,name:'Apple iPhone',price:200,color:'Black',available:'Not Available',image:'/assets/Products/iphone.jpg'},
  {id:4,name:'LG Fully Automated Washing Machine',price:200,color:'Black',available:'Available',image:'/assets/Products/Washingmachine.jpg'},
  {id:5,name:'LG Refrigerator',price:200,color:'Black',available:'Not Available',image:'/assets/Products/Refrigerator.jpg'},
  {id:6,name:'Dell inspiron Laptop',price:200,color:'Black',available:'Available',image:'/assets/Products/Laptop.jpg'},
]
}
