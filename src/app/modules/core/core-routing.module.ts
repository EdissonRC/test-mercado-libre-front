import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeliDetailProductComponent } from './components/meli-detail-product/meli-detail-product.component';
import { MeliLandingComponent } from './components/meli-landing/meli-landing.component';

const routes: Routes = [
    { path: "", component: MeliLandingComponent },
    { path: "items", component: MeliDetailProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }