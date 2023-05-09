import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import CartSummary from '../cart/CartSummary';

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <p>Northwind</p>
        <Nav>
          <NavItem>
            <CartSummary />
          </NavItem>
        </Nav>

      </div>
    );
  }
}