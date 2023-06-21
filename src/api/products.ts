import { Gadget } from '../types/Gadget';
import { GadgetItem } from '../types/GadgetItem';
import { RequestWithParamsResult } from '../types/RequestWithParams';
import { SortType } from '../types/SortType';
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

export const getProductsByIds = async (ids: string[]): Promise<Gadget[]> => {
  return client.post('/products/ids', { ids });
};

export const getOneProduct = async (phoneId: string): Promise<GadgetItem> => {
  const path = phoneId.trim();

  return client.get<GadgetItem>(path);
};

export const getProductsPaginated = async (
  category: string,
  perPage?: number,
  page?: number,
  sort?: SortType,
  priceMin?: number,
  priceMax?: number,
): Promise<RequestWithParamsResult> => {
  const queryParams = [];

  if (perPage) {
    queryParams.push(`perPage=${perPage}`);
  }

  if (page) {
    queryParams.push(`page=${page}`);
  }

  if (sort) {
    queryParams.push(`sort=${sort}`);
  }

  if (priceMin) {
    queryParams.push(`minPrice=${priceMin}`);
  }

  if (priceMax) {
    queryParams.push(`maxPrice=${priceMax}`);
  }

  const path = `/${category}${queryParams.length ? `?${queryParams.join('&')}` : ''
    }`; // eslint-disable-line

  return client.get<RequestWithParamsResult>(path);
};
