import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {

  selectedCustomer: Customer=new Customer();

  customers: Customer[]=[
    {CustNo: 1,  Name: 'Manikandan',  Address: '163,v.v.c.r.Nagar',  city: "Erode",  country: "Tamilnadu"},
    {CustNo: 2,  Name: 'Arumugam',  Address: '163,v.v.c.r.Nagar',  city: "Erode",  country: "Tamilnadu"},
    {CustNo: 3,  Name: 'Vijay',  Address: '163,v.v.c.r.Nagar',  city: "Andhiyur",  country: "Tamilnadu"},
    {CustNo: 4,  Name: 'Vinoth',  Address: '163,v.v.c.r.Nagar',  city: "Bhavani",  country: "Tamilnadu"},
    {CustNo: 5,  Name: 'Magesh',  Address: '163,v.v.c.r.Nagar',  city: "Chennai",  country: "Tamilnadu"},

  ]
}
