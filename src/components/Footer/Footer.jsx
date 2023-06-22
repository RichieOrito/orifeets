import React from 'react';
import './footer.css';
import logo from '../../assets/images/converse.png';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
            <img src={logo} alt='logo' />
              <div>
              <h1 className='text-white'>Ori<span>.</span>Feets</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque quidem soluta odit atque. Minima soluta fugit veniam
                voluptate aut asperiores!
            </p>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
                <ListGroup className='mb-3'>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Sneakers</Link>
                  </ListGroupItem >
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Converse</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Trainers</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Rubbers</Link>
                  </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful links</h4>
                <ListGroup >
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/shop'>Shop</Link>
                  </ListGroupItem >
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/cart'>Cat</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/login'>Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
            </div>

          </Col>
          <Col lg='3' md='4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
                <ListGroup className='footer__contact'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-map-pin-user-line"></i></span>
                    <p>Nairobi, Kenya</p>
                  </ListGroupItem >
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-phone-fill"></i></span>
                    <p>+254 711600131</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-fill"></i></span>
                    <p>oritorichie2@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
            </div>

          </Col>
          <Col lg='12'>
            <p className='footer__copyright'>COPYRIGHT {year} developed by RICHARD ORITO.
            All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;