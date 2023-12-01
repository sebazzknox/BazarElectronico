import { Component, inject } from '@angular/core';
import { BusquedaService } from 'src/app/busqueda.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
})
export class TiendaComponent {
  value = 'Buscar';

  productList: Product[] = [];
  busquedaService: BusquedaService = inject(BusquedaService);
  filteredProductList: Product[] = [];

  constructor() {
    this.productList = this.busquedaService.getAllProduct();
    this.filteredProductList = this.productList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.productList;
    }

    this.filteredProductList = this.productList.filter((product) =>
      product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
