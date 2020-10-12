import axios from 'axios';

const http = axios.create({
  baseURL: process.env.MELI_URL,
});

export const search = async (search: string) => {
  const { data } = await http.get('/sites/MLA/search', {
    params: {
      q: search,
      limit: 4,
    },
  });

  return data;
};

export const getProduct = async (id: string) => {
  const [item, description] = await axios.all([
    http.get(`/items/${id}`),
    http.get(`/items/${id}/description`),
  ]);

  return { item, description };
};

export const getProductDetail = async (id: string) => {
  const { data } = await http.get(`/items/${id}`);

  return data;
};
