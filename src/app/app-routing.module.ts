import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { APIComponent } from './pages/api/api.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ExampleApi', component: APIComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
