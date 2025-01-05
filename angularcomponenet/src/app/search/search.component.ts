import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  SearchText: string = "";

  ChangeSearchValue(eventData: Event){
   // console.log((<HTMLInputElement>eventData.target).value)
   this.SearchText = (<HTMLInputElement>eventData.target).value
  }
}
