import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Componnets/NavBar';
import ProductDetail from './Componnets/ProductDetail';
import { ProductProvider } from './Componnets/ProductProvider';
import ProductList from './Componnets/ProductsList';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <NavBar />
      <Router>
      
        <div className="container"> 
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
