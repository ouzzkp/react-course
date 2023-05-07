import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
   
    // In older versions this block forced to use 
    // but with the new versions of React 
    // its depents on you
    /*  constructor(props){
        super(props);
        state:{}
    } */
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    <ListGroupItem>Ev/Bahçe</ListGroupItem>
                    <ListGroupItem>Elektronik</ListGroupItem>
                    <ListGroupItem>Kırtasiye</ListGroupItem>
                    <ListGroupItem>Sağlık</ListGroupItem>
                    <ListGroupItem>Spor</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
