import {Product} from './model/Product';

export const PRODUCTS = [

  new Product(
    'A',
    'Aspiradora',
    50.00,
    {name: "3 por 130", applyTo: 3, amount: 130, code: '001'}
  ),
  new Product(
    'B',
    'Cafetera NESSPRESO',
    30.00,
    {name: "2 por 45", applyTo: 2, amount: 45, code: '002'}
  ),
  new Product(
    'C',
    'Altavoz JBL T6',
    20.00
  ),
  new Product(
    'D',
    'Mesa plegable',
    15.00
  )
];
