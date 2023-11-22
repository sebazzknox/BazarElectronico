import { Component, OnInit } from '@angular/core';
import { Product, products } from 'src/app/interfaces/product';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
})
export class TiendaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  products = [...products];
}
