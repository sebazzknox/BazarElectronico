import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { InputClearableComponent } from 'src/app/shared/components/input-clearable/input-clearable.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { LayoutComponent } from './layout.component';

import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    InputClearableComponent,
  ],
  imports: [
    DividerModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    NgIf,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
