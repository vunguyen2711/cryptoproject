import React from "react";
import { Link } from "react-router-dom";
import { Space, Typography } from "antd";
import { NavBar, Layout as MainLayout } from "./components";

import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <div className="routes">
          <MainLayout />
        </div>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoVerse
            <br />
            All your currencies will be reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/currencies">CryptoCurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
