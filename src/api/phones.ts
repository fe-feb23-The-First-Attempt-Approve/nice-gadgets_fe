import { Gadget } from '../types/Gadget';
import { GadgetItem } from '../types/GadgetItem';
import { SortType } from '../types/SortType';
import { client } from '../utils/fetchClient';

type RequestWithParamsResult = {
  allPhonesCount: number;
  filteredCount: number,
  visiblePhones: Gadget[];
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

  const path = `/phones${queryParams.length ? `?${queryParams.join('&')}` : ''
    }`; // eslint-disable-line

  return client.get<RequestWithParamsResult>(path);
};

export const getOnePhone = async (phoneId: string): Promise<GadgetItem> => {
  const path = phoneId.trim();

  return client.get<GadgetItem>(path);
};
