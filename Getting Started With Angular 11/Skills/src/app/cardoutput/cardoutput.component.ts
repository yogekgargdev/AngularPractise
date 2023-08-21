import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cardoutput',
  templateUrl: './cardoutput.component.html',
  styleUrls: ['./cardoutput.component.css']
})
export class CardoutputComponent {
  @Output() OutputTest:EventEmitter<string> = new EventEmitter<string>();

  onClick(){
    this.OutputTest.emit("Hi There How Are You?")
  }

}
