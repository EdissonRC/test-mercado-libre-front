import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeliHeaderComponent } from './components/meli-header/meli-header.component';
import { MeliCardItemsComponent } from './components/meli-card-items/meli-card-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BaseModule } from '../base/base.module';
import { MeliCardDetailsComponent } from './components/meli-card-details/meli-card-details.component';

@NgModule({
  declarations: [MeliHeaderComponent, MeliCardItemsComponent, MeliCardDetailsComponent],
  exports: [MeliHeaderComponent, MeliCardItemsComponent, MeliCardDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BaseModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
