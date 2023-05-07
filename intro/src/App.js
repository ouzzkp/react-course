import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap'


function App() {
  let titleOfProduct = "Product List";
  let titleOfCategory = "Category List";
  return (
    <div>
      <Container>
        <Row>
          <Row>
            <Navi />
          </Row>
          <Col xs="3">
            <CategoryList title={titleOfCategory}/>
          </Col>
          <Col xs="9">
            <ProductList title={titleOfProduct}/>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
