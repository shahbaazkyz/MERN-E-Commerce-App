import React, { useState } from "react"
import { Button, Col, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CheckoutSteps from "../components/CheckoutSteps"
import FormContainer from "../components/FormContainer"
import { savePaymentMethod } from "../redux/actions/cartActions"

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal")
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const { shippingAddress } = cart

  if (!shippingAddress) {
    navigate("/shipping")
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate("/placeorder")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="py-3">
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value={"Paypal"}
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>

            <Form.Check
              type="radio"
              label="JazzCash"
              id="JazzCash"
              name="paymentMethod"
              value={"JazzCash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary" block>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
