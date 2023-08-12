import { api } from '@/utils/constant';

const getProductsFromApi = async () => {
  try {
    const res = await api.get('/products?limit=10');
    const products: Partial<IApiTypes[] | []> = res.data.products;
    return products;
  } catch (error) {
    console.log(error);
  }
};

const createProducts = async (values: Partial<IApiTypes> | undefined) => {
  try {
    const res = await api.post<Partial<IApiTypes>>(`/products/add`, values, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getProductsFromApi, createProducts };
