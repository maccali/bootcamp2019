import React from 'react';

import tenis from '../../assets/tenis.jpg'

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src={tenis}
          alt="Tênis"
        />
        <strong>Tênis de mesa</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>
            <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

    </ProductList>
  );
}
