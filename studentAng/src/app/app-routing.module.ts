import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'info', component: StudentlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
