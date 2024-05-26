import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element ={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
