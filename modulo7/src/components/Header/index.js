import React from 'react';
import { Link } from 'react-router-dom'

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import Logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocketshoes" />
      </ Link>

      <Cart>
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 item</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"/>
      </ Cart>
    </ Container>
  );
}
