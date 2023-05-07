import React, { Component } from 'react';
import { Nav, NavItem,NavLink} from 'reactstrap';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink>
                            Link
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Number of Product - {this.props.cart.length}
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
