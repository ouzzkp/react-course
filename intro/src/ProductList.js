import React, { Component } from 'react'
import { List, ListGroup, ListGroupItem, Table, Button } from 'reactstrap'

export default class ProductList extends Component {
    // In older versions this block forced to use 
    // but with the new versions of React 
    // its depents on you
    /* constructor(props){
        super(props);
        state:{}
    } */
    
    

    render() {
        return (
            <div>
                <h3>{this.props.info.title} - {this.props.currentCategory}</h3>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Unit in Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope='row'>{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitInStock}</td>
                                    <td><Button color="info" onClick={()=>this.props.addToCart(product)}>Add to Card</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

