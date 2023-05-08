import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col} from 'reactstrap'
import alertify from 'alertifyjs';
import { Route, Routes } from 'react-router-dom'
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {

    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);

  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedProduct = newCart.find(c => c.product.id === product.id);
    if (addedProduct) {
      addedProduct.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added successfly!")
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed successfly!")

  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    let productInfo = { title: "Product List", anotherAspect: "Another props" }
    let categoryInfo = { title: "Category List" }
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>

                <Route exact path="/" element={
                  <ProductList
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                  />} />

                <Route exact path="/cart" element={
                  <CartList
                    removeFromCart={this.removeFromCart}
                    cart={this.state.cart}
                  />} />

                <Route path="/*" element={<NotFound />} />
              </Routes>

            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}



