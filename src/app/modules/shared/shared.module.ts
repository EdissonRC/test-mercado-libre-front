import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeliHeaderComponent } from './components/meli-header/meli-header.component';
import { MeliCardComponent } from './components/meli-card/meli-card.component';



@NgModule({
  declarations: [MeliHeaderComponent, MeliCardComponent],
  exports: [MeliHeaderComponent, MeliCardComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
