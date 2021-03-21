import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ListDataComponent } from './components/list-data/list-data.component';

const routes: Routes = [
  {path:"list",component:ListDataComponent},
  {path:"add",component:AddDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
