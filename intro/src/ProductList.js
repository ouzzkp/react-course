import React, { Component } from 'react'

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
                <h3>{this.props.info.title}</h3>
                <h5>{this.props.currentCategory}</h5>
                </div>
        )
    }
}
