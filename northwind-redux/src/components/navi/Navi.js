import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
       
      </div>
    );
  }
}