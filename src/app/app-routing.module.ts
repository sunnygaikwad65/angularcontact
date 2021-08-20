import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { GetContactComponent } from './get-contact/get-contact.component';

const routes: Routes = [
  {path:'contact/add', component:AddContactComponent},
  {path:'contact/add/:id', component:AddContactComponent},
  {path:'contact', component:GetContactComponent},
  {path:'', component:GetContactComponent}
  // {path:'contact/edit/:id', component:EditContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
