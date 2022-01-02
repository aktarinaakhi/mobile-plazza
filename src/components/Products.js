import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useProducts from "../hooks/useProducts.js";
import Header from "./Header.js";
import Product from "./Product.js";
const Products = () => {
  const products = useProducts();
  const count = products.length;

  return (
    <>
      <Header />
      {!count ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container className="mb-5">
            <h2 className="text-center text-uppercase mt-5 mb-4 feature">
              Latest PRODUCTS
            </h2>
            <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
              A product feature is a specific piece of functionality that has a
              corresponding benefit
            </p>
          <Row>
            {products?.map((product) => (
              <Product kay={product._id} product={product} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Products;
