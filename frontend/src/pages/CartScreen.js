import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Message from "../components/Message";
import {
  Row,
  Col,
  Button,
  Card,
  Image,
  ListGroup,
  Form,
} from "react-bootstrap";
import { addToCart } from "../redux/actions/cartActions";
import { useLocation } from "react-router-dom";

const CartScreen = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const qty = search ? Number(search.split("=")[1]) : 1;
  console.log(qty);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return <div>Cart Screen</div>;
};

export default CartScreen;
