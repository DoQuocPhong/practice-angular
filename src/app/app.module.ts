import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

//common
import { ButtonComponent } from './common/button/button.component';

//enums
import { Routing } from './enums/routing';
import { CaculaterComponent } from './components/caculater/caculater.component';
import { LoginComponent } from './common/login/login.component';

//routes
const routes: Routes = [
  {
    path: '',
    redirectTo: Routing.Home,
    pathMatch: 'full',
  },
  {
    path: Routing.Home,
    component: HomeComponent,
  },
  {
    path: Routing.User,
    component: UserComponent,
  },
  {
    path: Routing.Admin,
    component: AdminComponent,
  },
  {
    path: Routing.Caculate,
    component: CaculaterComponent,
  },
  {
    path: Routing.Login,
    component: LoginComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    ButtonComponent,
    CaculaterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
