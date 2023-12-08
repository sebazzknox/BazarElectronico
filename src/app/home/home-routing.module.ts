import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCrudComponent } from '../components/pagina-crud/pagina-crud.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'add', component: PaginaCrudComponent },
  { path: 'edit/:id', component: PaginaCrudComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
