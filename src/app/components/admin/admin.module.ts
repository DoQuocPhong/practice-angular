import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '@common/login/login.component';

import { AdminComponent } from './admin.component';

import { adminRoutes } from './admin.routes';

@NgModule({
  declarations: [
        AdminComponent,
        LoginComponent,
  ],
  imports: [
        RouterModule.forChild(adminRoutes)
  ],
  providers: [],
})
export class AdminModule { }
