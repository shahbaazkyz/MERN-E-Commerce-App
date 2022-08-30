import Footer from "./components/Footer"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import HomeScreen from "./pages/HomeScreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductScreen from "./pages/ProductScreen"
import CartScreen from "./pages/CartScreen"
import LoginScreen from "./pages/LoginScreen"
import RegisterScreen from "./pages/RegisterScreen"
import ProfileScreen from "./pages/ProfileScreen"
import ShippingScreen from "./pages/ShippingScreen"
import PaymentScreen from "./pages/PaymentScreen"
import PlaceorderScreen from "./pages/PlaceorderScreen"

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceorderScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="*" element={<div>Not Found</div>} />
            <Route index path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
