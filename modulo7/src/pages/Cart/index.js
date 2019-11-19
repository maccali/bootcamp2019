import React, { Component } from 'react';

import tenis from '../../assets/tenis.jpg'

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';


import { Container, ProductTable, Total } from './styles';

export default class Cart extends Component {
  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={tenis} alt="Tênis" />
              </td>
              <td>
                <strong>Tenis muito massa</strong>
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                  <button>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={1} />
                  <button>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar Pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>R$1920,28</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}
