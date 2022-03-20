import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//import { UserComponent } from './components/user/user.component';
//import { AdminComponent } from './components/admin/admin.component';

//common
// import { ButtonComponent } from './common/button/button.component';

//enums
import { Routing } from './enums/routing';
import { CaculaterComponent } from './components/caculater/caculater.component';
//import { LoginComponent } from './common/login/login.component';
// import { HeaderComponent } from './common/header/header.component';
// import { FooterComponent } from './common/footer/footer.component';
// import { CardComponent } from './common/card/card.component';
// import { ImageComponent } from './common/image/image.component';
// import { TextComponent } from './common/text/text.component';

//routes
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: Routing.Home,
  //   pathMatch: 'full',
  // },
  // {
  //   path: Routing.Image,
  //   component: ImageComponent,
  // },
  // {
  //   path: Routing.Card,
  //   component: CardComponent,
  // },
  {
    path: Routing.Home,
    component: HomeComponent,
  },
  // {
  //   path: Routing.User,
  //   component: UserComponent,
  // },
  {
    path: Routing.Admin,
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: Routing.User,
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  // {
  //   path: Routing.Admin,
  //   component: AdminComponent,
  // },
  {
    path: Routing.Caculate,
    component: CaculaterComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //UserComponent,
    //AdminComponent,
    //ButtonComponent,
    CaculaterComponent,
    //LoginComponent,
    //HeaderComponent,
    //FooterComponent,
    //CardComponent,
    //ImageComponent,
    //TextComponent
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
