import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="/">
                            Main Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="form">
                                Go to From
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="form2">
                                Go to From2
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Number of Product
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
