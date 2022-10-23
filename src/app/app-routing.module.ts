import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ApiUserLimiterComponent } from './pages/api-user-limiter/api-user-limiter.component';
import { ApiUserComponent } from './pages/api-user/api-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'apiUser', pathMatch: 'full' },
  { path: 'login', redirectTo: 'apiUser', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'apiUser', component: ApiUserComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
