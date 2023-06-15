import { Gadget } from '../types/Gadget';
import { PhoneItem } from '../types/PhoneItem';
import { SortType } from '../types/SortType';
import { client } from '../utils/fetchClient';

type RequestWithParamsResult = {
  allPhonesCount: number;
  phones: Gadget[];
};

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

  const path = `/phones${
    queryParams.length ? `?${queryParams.join('&')}` : ''
  }`;

  return client.get<RequestWithParamsResult>(path);
};

export const getOnePhone = async (phoneId: string): Promise<PhoneItem> => {
  const path = phoneId.trim();

  return client.get<PhoneItem>(path);
};
