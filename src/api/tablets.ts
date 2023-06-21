import { GadgetItem } from '../types/GadgetItem';
import { RequestWithParamsResult } from '../types/RequestWithParams';
import { SortType } from '../types/SortType';
import { client } from '../utils/fetchClient';

export const getTablets = async (
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

  const path = `/tablets${
    queryParams.length ? `?${queryParams.join('&')}` : ''
  }`;

  return client.get<RequestWithParamsResult>(path);
};

export const getOneTablet = async (tabletId: string): Promise<GadgetItem> => {
  const path = tabletId.trim();

  return client.get<GadgetItem>(path);
};
