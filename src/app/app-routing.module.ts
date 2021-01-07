import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalonComponent } from './salon/salon.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { SanteComponent } from './sante/sante.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  { path: '', redirectTo: 'salon', pathMatch: 'full'},
  { path: 'salon', component: SalonComponent},
  { path: 'partenaires', component: PartenairesComponent},
  { path: 'sante', component: SanteComponent},
  { path: 'admin', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
