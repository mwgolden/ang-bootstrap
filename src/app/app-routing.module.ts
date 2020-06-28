import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalShelterComponent } from './animal-shelter/animal-shelter.component'


const routes: Routes = [
	{path: 'table', component: AnimalShelterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
