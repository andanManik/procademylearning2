import { EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";

export class serviceforsubjectservice{
//AvailableString:string=''

//stringEmitter =  new EventEmitter<string>()
stringEmitter = new Subject<string>()


// setAvailableString(givenString: string){
//     this.AvailableString = givenString;
//     console.log('Value from service :' + givenString)
//    // this.emitString()
// }

// emitString(data: string){
//     this.stringEmitter.emit(data);
emitString(data: string){
    this.stringEmitter.next(data);
}

}