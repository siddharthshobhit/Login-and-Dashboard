import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/Login', pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Home',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes, { useHash: true })]
  ],
  declarations: [],
})
export class AppRoutingModule {

}
