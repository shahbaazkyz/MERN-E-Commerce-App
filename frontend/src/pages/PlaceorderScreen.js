import React from "react"
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CheckoutSteps from "../components/CheckoutSteps"
import Message from "../components/Message"

const PlaceorderScreen = () => {
  const {shippingAddress, cartItems,} = useSelector((state) => state.cart)
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping Address</h2>
              <p>
                <strong>Address: </strong>
                {shippingAddress.address}, {shippingAddress.city}{" "}
                {shippingAddress.postalCode},{" "}
                {shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {
                cartItems.length === 0 ? (
                  <Message>Your cart is empty</Message>
                ) : (
                    <ListGroup variant="flust">
                      {
                        cartItems.map((item, index) => (
                          <ListGroup.Item key={index}>
                            <Row>
                              <Col md={1}>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fluid
                                  rounded
                                />
                              </Col>
                              <Col >
                                <Link to={`/product/${item.product}`}>
                                  {item.name}
                                </Link>
                              </Col>
                              <Col md={4}>
                                {
                                  item.qty
                                } x ${item.price} = ${(item.qty * item.price).toFixed(2)}
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        )
                        )
                      }
                    </ListGroup>
                )
              }
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}</Col>
                </Row>
              </ListGroup.Item>
              </ListGroup>
          </Card>
          </Col>
      </Row>
    </>
  )
}

export default PlaceorderScreen
