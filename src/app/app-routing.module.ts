import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: "", loadChildren: "./modules/core/core.module#CoreModule" },
  { path: "**", pathMatch: 'full', redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
