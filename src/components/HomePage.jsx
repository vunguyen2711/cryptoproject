import React, { useState } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
const { Title } = Typography;

const HomePage = () => {
  const [simplified, setSimlified] = useState(true);
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptoQuery(count);
  const globalStats = data?.data?.stats;

  if (isFetching) return "...is Loading";
  // function
  const handleChangeSimlified = () => {
    setSimlified(!simplified);
  };
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total CryptoCurrencies"
            value={globalStats.total}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total MarketCap"
            value={millify(globalStats.totalMarketCap)}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h"
            value={millify(globalStats.total24hVolume)}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          ></Statistic>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top {data.data.coins.length} CryptoCurrencies in the world
        </Title>
        <Title level={3} className="show-more" onClick={handleChangeSimlified}>
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={simplified} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Lastest Crypto Value
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News />
    </>
  );
};

export default HomePage;
