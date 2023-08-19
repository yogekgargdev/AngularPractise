import { Component } from "@angular/core";
declare const genRandomNumbers: any;

@Component({
    selector: 'app-product',
    template: `<div *ngIf='ProductShow'>Product Works</div>
               <div>{{data}}</div>
               <br><br>
               <div><li *ngFor='let product of productsArray'>{{product}}</li></div>`,
    styles: ['li{color:green; margin-top:10px}']
})
export class ProductComponent {
    ProductShow = true;
    productsArray = ["Motorcycle", "Bike","Car","Scooter"];
    data = <[]>genRandomNumbers();
}