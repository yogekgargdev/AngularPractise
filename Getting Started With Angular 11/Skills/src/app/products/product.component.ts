import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `<div *ngIf='ProductShow'>Product Works</div>`
})
export class ProductComponent{
    ProductShow = true;

}