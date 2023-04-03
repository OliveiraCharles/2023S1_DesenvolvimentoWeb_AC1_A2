import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImcExplanationComponent } from './imc-explanation/imc-explanation.component';
import { ImcComponent } from './imc/imc.component';

const routes: Routes = [
  { path: '', redirectTo: '/imc-explanation', pathMatch: 'full' },
  { path: 'imc', component: ImcComponent },
  { path: 'imc-explanation', component: ImcExplanationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
