import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route index path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
