import React, {useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/shoe2.png';

import Services from '../services/Services';
import ProductsList from '../components/Ui/ProductsList';

const Home = () => {

  const [trendingShoes, setTrendingShoes] = useState([]);
  const [bestSalesShoes, setBestSalesShoes] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingShoes = products.filter(
      (item) => item.category === 'sneaker'
      );

    const filteredBestSalesShoes = products.filter(
      (item) => item.category === 'trainers'
      );

      setTrendingShoes(filteredTrendingShoes);
      setBestSalesShoes(filteredBestSalesShoes)
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">
                  In fashion style in {year}
                </p>
                <h2>Keep the street wear alive, affordable and trendy</h2>
                <p>
                  Fashion is like eating, you shouldn't stick to the same menu. <br />
                  <span>~Kenzo Takada</span>
                </p>
                <motion.button whileTap={{scale:1.2}} 
                  className="buy__btn">
                <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">
                Trending Shoes
              </h2>
            </Col>
            <ProductsList data={trendingShoes} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Promotion Shoes</h2>
            </Col>

            <ProductsList data={bestSalesShoes} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;