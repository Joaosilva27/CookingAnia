import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import MealsPage from "./pages/MealsPage.jsx";
import SoupsPage from "./pages/SoupsPage.jsx";
import SnacksPage from "./pages/SnacksPage.jsx";
import DessertPage from "./pages/DessertPage.jsx";
import SmoothiesPage from "./pages/SmoothiesPage.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/meals' element={<MealsPage />} />
        <Route path='/soups' element={<SoupsPage />} />
        <Route path='/snacks' element={<SnacksPage />} />
        <Route path='/desserts' element={<DessertPage />} />
        <Route path='/smoothies' element={<SmoothiesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
