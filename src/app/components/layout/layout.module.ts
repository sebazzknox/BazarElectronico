import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, FooterComponent],
  imports: [
    DividerModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
