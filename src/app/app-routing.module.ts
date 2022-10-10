import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargeComponent } from './charge/charge.component';

const routes: Routes = [
  { path: '', redirectTo: 'charge', pathMatch: 'full' },
  { path: 'charge', component: ChargeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
