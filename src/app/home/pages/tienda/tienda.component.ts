import { Component, inject } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { BusquedaService } from 'src/app/busqueda.service';
import { Product } from 'src/app/interfaces/product';
import { PaginatorService } from 'src/app/paginator.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorService }],
})
export class TiendaComponent {
  currentPage: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;
  value = 'Buscar';

  productList: Product[] = [];
  busquedaService: BusquedaService = inject(BusquedaService);
  filteredProductList: Product[] = [];

  constructor() {
    this.productList = this.busquedaService.getAllProduct();
    this.filteredProductList = this.productList;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.productList;
    }

    this.filteredProductList = this.productList.filter((product) =>
      product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageNumber = pageEvent.pageIndex + 1;
  }
}
