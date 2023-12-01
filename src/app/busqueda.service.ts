import { Injectable } from '@angular/core';
import { Product } from './interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class BusquedaService {
  productList: Product[] = [
    {
      id: 1,
      name: 'Pileta Nº1',
      description: 'Pileta 300lts 1.1m x 0.9m x 0.3m',
    },
    {
      id: 2,
      name: 'Pileta Nº2',
      description: 'Pileta 800lts 1.6m x 1.1m x 0.45m',
    },
    {
      id: 3,
      name: 'Pileta Nº3',
      description: 'Pileta 1250lts 2m x 1.25m x 0.5m',
    },
    {
      id: 4,
      name: 'Pileta Nº4',
      description: 'Pileta 2800lts 2.5m x 1.6m x 0.7m',
    },
    {
      id: 5,
      name: 'Pileta Nº5',
      description: 'Pileta 4200lts 3m x 2m x 0.7m',
    },
    {
      id: 6,
      name: 'Pileta Nº5 XL',
      description: 'Pileta 6300lts 4.5m x 2m x 0.7m',
    },
    {
      id: 7,
      name: 'Ventilador Turbo Kacemaster',
      description: '5 aspas indeformables de 40cm',
    },
    {
      id: 8,
      name: 'Sokany Mezcladora',
      description: 'Mezcladora modelo SK-133',
    },
    {
      id: 9,
      name: 'Ventilador Crivel',
      description: 'Ventilador Crivel 20"',
    },
    {
      id: 10,
      name: 'Parlante potenciado DJS 620BT',
      description: '29cm x 18.5cm x 16cm',
    },
    {
      id: 11,
      name: 'Ollas Hudson',
    },
    {
      id: 12,
      name: 'LumaBella mezcladora de mano',
      description: '4 en 1',
    },
    {
      id: 13,
      name: 'Delhi Pava Eléctrica',
    },
    {
      id: 14,
      name: 'Conservadora Heladera Gemplast',
      description: '34lts',
    },
  ];

  getAllProduct(): Product[] {
    return this.productList;
  }

  getProductById(id: number): Product | undefined {
    return this.productList.find((product) => product.id === id);
  }

  constructor() {}
}
