import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { Link } from 'react-router-dom'
class CartSummary extends Component {
    removeFromCart(product){
        this.props.action.removeFromCart(product)
    }
    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Sepetiniz Boş</NavLink>
            </NavItem>
        )
    }
    renderSummaryCart() {
        return (
            <UncontrolledDropdown>
                <DropdownToggle>
                    Sepet
                </DropdownToggle>
                <DropdownMenu>
                    {
                        this.props.cart.map(cartItem=>(
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color='danger' onClick={()=>this.removeFromCart(cartItem.product)}>X</Badge>
                                {cartItem.product.productName}
                                <Badge color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem>
                        <Link to={'/cart'}>
                        Sepete Git
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummaryCart() : this.renderEmptyCart()
                }
            </div>
        )
    }
}
// state'e bağlanmak için mapStateToProps dedik
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
// action' a bağlanmak için ise mapDispatchToProps diyeceğiz
function mapDispatchToProps(dispatch){
    return{
        action: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)