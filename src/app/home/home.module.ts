import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginatorPipe } from '../pipes/paginator.pipe';
import { HomeRoutingModule } from './home-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

@NgModule({
  declarations: [TiendaComponent, ProductoComponent, PaginatorPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
  ],
})
export class HomeModule {}
