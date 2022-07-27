import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { HomeComponent } from './components/template/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent,
},
{
  path:"clientread",
  component: ClientReadComponent,
},
{
  path:"clientdelete/:id",
  component: ClientDeleteComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
