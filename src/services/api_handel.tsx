import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company: string, category: string, top: number, minPrice: number, maxPrice: number) => {
  const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${category}/products`, {
    params: { top, minPrice, maxPrice },
  });
  return response.data;
};
