import React from 'react';
import { useParams } from 'react-router-dom';

interface ProductDetailParams {
  productId?: string;
  [key: string]: string | undefined;
}


const getProductDetails = (productId: string) => {
  
  const products = [
    {
      id: '1',
      name: 'Laptop 1',
      company: 'AMZ',
      category: 'Laptop',
      price: 2236,
      rating: 4.7,
      discount: 63,
      availability: 'yes'
       
    },
    {
      id: '2',
      name: 'Laptop 13',
      company: 'AMZ',
      category: 'Laptop',
      price: 1244,
      rating: 4.5,
      discount: 45,
      availability: 'out-of-stock'
      
    },
    {
      id: '3',
      name: 'Laptop 3',
      company: 'AMZ',
      category: 'Laptop',
      price: 9102,
      rating: 4.44,
      discount: 98,
      availability: 'yes'
      
    },
  ];

  
  const product = products.find(item => item.id === productId);
  return product;
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<ProductDetailParams>();

  
  if (!productId) {
    return <div>Invalid Product ID</div>;
  }

  const product = getProductDetails(productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img alt={product.name} style={{ maxWidth: '300px', marginRight: '20px' }} />
        <div>
          <h2>{product.name}</h2>
          <p><strong>Company:</strong> {product.company}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <p><strong>Discount:</strong> {product.discount}%</p>
          <p><strong>Availability:</strong> {product.availability === 'yes' ? 'Available' : 'Out of Stock'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
