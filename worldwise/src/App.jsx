import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CountryList from "./components/CountryList";
import City from "./components/City";
import CityList from "./components/CityList";
import Form from "./components/Form";
import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/fakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { lazy } from "react";

// import Product from "./pages/product";
// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

//lazyloading

const Product = lazy(()=>import("./pages/Product"))
const Homepage = lazy(()=>import("./pages/Homepage"))
const Login = lazy(()=>import("./pages/Login"))
const AppLayout = lazy(()=>import("./pages/AppLayout"))
const Pricing = lazy(()=>import("./pages/Pricing"))

// before code splitting : 
//dist/assets/index-66581bcb.css   30.06 kB │ gzip:   5.09 kB
// dist/assets/index-dd930454.js   508.50 kB │ gzip: 148.29 kB

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="product" element={<Product />} />
              <Route path="/" element={<Homepage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
