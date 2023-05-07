import React, { Component } from 'react';
import { Nav, NavItem,NavLink} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Number of Product
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
