import { Gadget } from '../types/Gadget';
import { client } from '../utils/fetchClient';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProducts = async () => {
  return client.get<Gadget[]>('/products');
};
