import "./App.css";
import Home from "./pages";
import OrderPage from "./pages/order";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderSuccess from "./components/OrderSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
