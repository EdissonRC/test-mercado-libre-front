import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeliDetailProductComponent } from './modules/core/components/meli-detail-product/meli-detail-product.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
