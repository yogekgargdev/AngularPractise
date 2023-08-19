import { Component } from '@angular/core';
declare const genRandomNumbers:any;
@Component({
  selector: 'app-paginationex',
  templateUrl: './paginationex.component.html',
  styleUrls: ['./paginationex.component.css']
})
export class PaginationexComponent {

  RandomNumbersArray = <[]>genRandomNumbers().sort(function(x:number,y:number){return x-y}).filter((x:number)=>x<2000);

  itemsOnEachPage: number = 10;
  CurrentPageNumber:number =1
  
  OnPageChange(event:number)
  {
    this.CurrentPageNumber = event;

  }

}
