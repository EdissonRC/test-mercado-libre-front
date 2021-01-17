import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MeliLandingComponent } from './components/meli-landing/meli-landing.component';
import { MeliDetailProductComponent } from './components/meli-detail-product/meli-detail-product.component';



@NgModule({
  declarations: [ MeliLandingComponent, MeliDetailProductComponent],
  exports: [MeliLandingComponent, MeliDetailProductComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
