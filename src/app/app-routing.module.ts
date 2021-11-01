import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HerbsComponent} from './herbs/herbs.component';


const routes: Routes = [
  {path: 'herbs' , component: HerbsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
