import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  //imports: [CommonModule],
  // Since we don't require to use CommonModule in any of the components etc in the shared module its safe to comment out the imports:
  exports: [CommonModule]
})
export class SharedModule { }
