import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './dashboard/pages/categories/categories.component';
import { MainComponent } from './dashboard/pages/main/main.component';
import { WelcomeComponent } from './dashboard/pages/welcome/welcome.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: MainComponent, canActivate: [AdminGuard], children: [
    {path: '', component: WelcomeComponent},
    {path: 'categories', component: CategoriesComponent},
  ]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
