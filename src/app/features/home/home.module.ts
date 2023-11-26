import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { TiendaComponent } from './pages/tienda/tienda.component';

@NgModule({
  declarations: [TiendaComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
