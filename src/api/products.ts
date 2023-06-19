import { Gadget } from '../types/Gadget';
import { PriceRange } from '../types/priceRange';
import { client } from '../utils/fetchClient';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProducts = async () => {
  return client.get<Gadget[]>('/products');
};

export const getProductsByQuery = async (query: string) => {
  return client.get<Gadget[]>(`/products/search?query=${query}`);
};

export const getProductsMinMaxPrices = async (
  category: string,
): Promise<PriceRange> => {
  return client.get<PriceRange>(`/${category}/prices`);
};

export const getHotProducts = async (): Promise<Gadget[]> => {
  return client.get('/products/hot');
};
