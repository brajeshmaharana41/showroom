import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './landing/login-page/login-page.component';
import { NewAgreementsComponent } from './main/agreements/new-agreements/new-agreements.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'new-agreements', component: NewAgreementsComponent},
  { path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
