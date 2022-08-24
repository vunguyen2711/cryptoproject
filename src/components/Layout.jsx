import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  Exchanges,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "../components";
const Layout = () => (
  <Routes>
    <Route path="/" index element={<HomePage />} />
    <Route path="/exchanges" index element={<Exchanges />} />
    <Route path="/cryptocurrencies" index element={<Cryptocurrencies />} />
    <Route path="/crypto/:coidId" index element={<CryptoDetails />} />
    <Route path="/news" index element={<News />} />
  </Routes>
);

export default Layout;
