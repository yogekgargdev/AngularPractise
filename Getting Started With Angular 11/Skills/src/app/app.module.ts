import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductFeatureModule } from './product-feature/product-feature.module';
import { PaginationexComponent } from './paginationex/paginationex.component';
import { ClassifyPipe } from './classify.pipe';
import { CardComponent } from './card/card.component';
import { CardoutputComponent } from './cardoutput/cardoutput.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginationexComponent,
    ClassifyPipe,
    CardComponent,
    CardoutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductFeatureModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
