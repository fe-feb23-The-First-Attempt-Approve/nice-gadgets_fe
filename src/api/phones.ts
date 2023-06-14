import { Gadget } from '../types/Gadget';
import { PhoneItem } from '../types/PhoneItem';
import { Phone } from '../types/Phone';
import { SortType } from '../types/SortType';
import { client } from '../utils/fetchClient';

type RequestWithParamsResult = {
  allPhonesCount: number;
  phones: Gadget[];
};

export const getPhones = async (
  perPage?: number,
  page?: number,
  productType?: Phone[],
  sortBy?: SortType,
  priceMin?: number,
  priceMax?: number,
  query?: string,
): Promise<RequestWithParamsResult> => {
  const queryParams = [];

  if (perPage) {
    queryParams.push(`perPage=${perPage}`);
  }

  if (page) {
    queryParams.push(`page=${page}`);
  }

  if (sortBy) {
    queryParams.push(`sortBy=${sortBy}`);
  }

  if (priceMin) {
    queryParams.push(`priceMin=${priceMin}`);
  }

  if (priceMax) {
    queryParams.push(`priceMax=${priceMax}`);
  }

  if (query) {
    queryParams.push(`query=${query}`);
  }

  if (productType) {
    productType.forEach((category) => queryParams.push(`productType=${category}`));
  }

  const path = `/phones${queryParams.length ? `?${queryParams.join('&')}` : ''
    }`; // eslint-disable-line

  return client.get<RequestWithParamsResult>(path);
};

export const getOnePhone = async (phoneId: string): Promise<PhoneItem> => {
  const path = phoneId.trim();

  return client.get<PhoneItem>(path);
};
