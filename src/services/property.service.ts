import { api } from '@/utils/constant';

const getProductsFromApi = async (
  values = '',
  limit = 50,
  isCategory = false
) => {
  try {
    const res = await api.get<IDataResponse>(
      isCategory
        ? `/products/category/${values}`
        : `/products/search?q=${values}&limit=${limit}`
    );
    return res.data;
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

const getDetailsProduct = async (id: number) => {
  try {
    const res = await api.get<IApiTypes | undefined | null>(`/products/${id}`);
    const product = res.data;

    return product;
  } catch (error) {
    console.log(error);
  }
};

export { getProductsFromApi, createProducts, getDetailsProduct };