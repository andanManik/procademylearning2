import { Component,EventEmitter,Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input('all') all: number = 0;
@Input('free') free: number =0;
@Input('premium') premium: number = 0;

SelectedRadioButtonValue: string = 'All';

@Output()
FilterRadioButtonValueChanged: EventEmitter<string> = new EventEmitter<string>;

onRadioButtonSelectionChanged(){
  this.FilterRadioButtonValueChanged.emit(this.SelectedRadioButtonValue);
  console.log(this.SelectedRadioButtonValue);
}

}
