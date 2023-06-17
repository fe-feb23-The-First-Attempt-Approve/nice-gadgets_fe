import { Gadget } from './Gadget';

export type RequestWithParamsResult = {
  allProductsCount: number;
  filteredCount: number,
  visibleProducts: Gadget[];
};
