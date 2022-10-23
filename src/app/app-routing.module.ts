import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ApiUserLimiterComponent } from './pages/api-user-limiter/api-user-limiter.component';
import { ApiUserComponent } from './pages/api-user/api-user.component';
import { ApiRouteComponent } from './pages/api-route/api-route.component';

const routes: Routes = [
  { path: '', redirectTo: 'apiUser', pathMatch: 'full' },
  { path: 'login', redirectTo: 'apiUser', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'apiUser', component: ApiUserComponent },
  { path: 'apiRoute', component: ApiRouteComponent },
  { path: 'apiUserLimiter', component: ApiUserLimiterComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
