import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CountryList from "./components/CountryList";
import AppLayout from "./pages/AppLayout";
import City from "./components/City";
import CityList from "./components/CityList";
import Form from "./components/Form";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function cityNameFetch() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3000/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        alert("err in data fetch");
      } finally {
        setIsLoading(false);
      }
    }
    cityNameFetch();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="/" element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<Navigate  replace to="cities"/>}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City/>}/>
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<Form/>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
