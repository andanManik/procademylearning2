import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

   SearchText: string = "";

  @Output()
  SearchTextChanged: EventEmitter<string> = new EventEmitter<string>;
 

  onInputChange(data: Event){
     this.SearchTextChanged.emit(this.SearchText);
    console.log(this.SearchText)
  }

}
