import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { fetchProducts } from '../services/api_handel';

interface Product {
  id: string;
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availability: string;
}

interface Filters {
  company: string;
  category: string;
  top: number;
  minPrice: number;
  maxPrice: number;
}

interface ProductContextType {
  products: Product[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    company: 'AMZ',
    category: 'Laptop',
    top: 10,
    minPrice: 0,
    maxPrice: 10000,
  });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(
        filters.company,
        filters.category,
        filters.top,
        filters.minPrice,
        filters.maxPrice
      );
      const productsWithId = data.map((product: Product, index: number) => ({
        ...product,
        id: `${product.productName}-${index}`,
      }));
      setProducts(productsWithId);
    };
    loadProducts();
  }, [filters]);

  return (
    <ProductContext.Provider value={{ products, filters, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};
