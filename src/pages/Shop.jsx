import React,{useState} from 'react';

import CommonSection from '../components/Ui/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import '../styles/shop.css';

import products from '../assets/data/products';
import ProductsList from '../components/Ui/ProductsList';


const Shop = () => {

  const [productsData, setProductsData] = useState(products);
  
  const handleFilter = e=>{
    const filterValue = e.target.value;
    if(filterValue === 'sneaker') {
      const filteredProducts = products.filter(
        (item) => item.category === 'sneaker'
      );

      setProductsData(filteredProducts);
    }

    if(filterValue === 'converse') {
      const filteredProducts = products.filter(
        (item) => item.category === 'converse'
      );

      setProductsData(filteredProducts);
    }

    if(filterValue === 'rubbers') {
      const filteredProducts = products.filter(
        (item) => item.category === 'rubbers'
      );

      setProductsData(filteredProducts);
    }

    if(filterValue === 'trainers') {
      const filteredProducts = products.filter(
        (item) => item.category === 'trainers'
      );

      setProductsData(filteredProducts);
    }
    
  }

  const handleSearch = e=>{
    const searchTerm = e.target.value;

    const searchedProducts = products.filter(item=> item.productName.
      toLowerCase().includes(searchTerm.toLowerCase()))

      setProductsData(searchedProducts)
  }
  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sneaker">Sneaker</option>
                  <option value="converse">Converse</option>
                  <option value="trainers">Trainers</option>
                  <option value="rubbers">Rubbers</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                  <select>
                        <option>Sort By</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                  </select>
                </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search__box">
                <input type="text" placeholder='Search here......' onChange={handleSearch} />
                <span><i class="ri-search-eye-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? (<h1 className='text-center'>No shoes are found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )
            }
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};
export default Shop;