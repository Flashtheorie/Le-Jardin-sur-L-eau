import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambresComponent } from './chambres/chambres.component';
import { ChoixComponent } from './choix/choix.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path: 'choix', component: ChoixComponent},
  { path: 'chambre/:id', component: ChambresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
