import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { connect } from 'react-redux'
import { Button, Table } from 'reactstrap'
import alertify from 'alertifyjs'

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.action.removeFromCart(product)
        alertify.error(product.productName+ " sepetten silindi!")
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th>{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td><Button color='danger' onClick={() => this.removeFromCart(cartItem.product)}>Sil</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
// action' a bağlanmak için ise mapDispatchToProps diyeceğiz
function mapDispatchToProps(dispatch) {
    return {
        action: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)