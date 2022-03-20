import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from '@common/button/button.component';
import { CardComponent } from '@common/card/card.component';
import { FooterComponent } from '@common/footer/footer.component';
import { HeaderComponent } from '@common/header/header.component';
import { ImageComponent } from '@common/image/image.component';
import { TextComponent } from '@common/text/text.component';
import { UserComponent } from './user.component';

import { userRoutes } from './user.routes';

@NgModule({
  declarations: [
        UserComponent,
        HeaderComponent,
        FooterComponent,
        CardComponent,
        ImageComponent,
        TextComponent,
        ButtonComponent,
  ],
  imports: [
        RouterModule.forChild(userRoutes)
  ],
  providers: [],
})
export class UserModule { }
