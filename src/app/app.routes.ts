import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'registro', loadComponent: () => import('./modules/register/register.component').then(m => m.RegisterComponent) },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }