import { GadgetItem } from '../types/GadgetItem';
import { RequestWithParamsResult } from '../types/RequestWithParams';
import { SortType } from '../types/SortType';
import { PriceRange } from '../types/priceRange';
import { client } from '../utils/fetchClient';
import { Gadget } from '../types/Gadget';

export const getPhones = async (
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

  const path = `/phones${queryParams.length ? `?${queryParams.join('&')}` : ''
    }`; // eslint-disable-line

  return client.get<RequestWithParamsResult>(path);
};

export const getOnePhone = async (phoneId: string): Promise<GadgetItem> => {
  const path = phoneId.trim();

  return client.get<GadgetItem>(path);
};

export const getPhoneMinMaxPrices = async (): Promise<PriceRange> => {
  return client.get<PriceRange>('/phones/prices');
};

export const getHotProducts = async (): Promise<Gadget[]> => {
  return client.get('/products/hot');
};
