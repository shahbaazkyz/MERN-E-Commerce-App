import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="p-3 rounded h-100 ">
      <a href={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          className="img-fluid productImage"
        ></Card.Img>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>{" "}
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">Rs. {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
