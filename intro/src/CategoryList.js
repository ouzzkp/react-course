import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    render() {
        return (
            <div>
                <h3>Category List</h3>
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
