import { Component } from "@angular/core";
declare const genRandomNumbers: any;

@Component({
    selector: 'app-product',
    template: `<div *ngIf='ProductShow'>Product Works</div>
               <div>{{data}}</div>
               <br><br>
               <div><li *ngFor='let product of productsArray'>{{product}}</li></div><br>
               <div>Iterating Through Complex Objects</div>
               <li *ngFor="let person of peoplesArray">{{person.name}}</li>
               `,
    styles: ['li{color:green; margin-top:10px}']
})
export class ProductComponent {
    ProductShow = true;
    productsArray = ["Motorcycle", "Bike","Car","Scooter"];
    // Iterating Through Complex Objects
    peoplesArray =[
        {
            name: "Yogek Garg",
            id:"123131"
        },
        {
            name: "Ankit",
            id:"123131"
        },
        {
            name: "Abhinav",
            id:"123131"
        }

    ]  
    data = <[]>genRandomNumbers();
}