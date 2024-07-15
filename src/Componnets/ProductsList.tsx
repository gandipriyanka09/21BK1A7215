import { Card, CardContent, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ProductContext } from '../Componnets/ProductProvider';

const ProductList: React.FC = () => {
  const context = useContext(ProductContext);

  if (!context) return null;

  const { products, filters, setFilters } = context;

  return (
    <div>
      <h1>Products</h1>
      <div className="filters">
        {/* Add filter components here */}
      </div>
      <div className="product-list">
        {products.map(product => (
          <Card key={product.id}>
            <CardContent>
              <Typography variant="h5" component="div">
                {product.productName}
              </Typography>
              <Typography color="text.secondary">
                Price: ${product.price}
              </Typography>
              <Typography color="text.secondary">
                Rating: {product.rating}
              </Typography>
              <Typography color="text.secondary">
                Discount: {product.discount}%
              </Typography>
              <Typography color="text.secondary">
                Availability: {product.availability}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
