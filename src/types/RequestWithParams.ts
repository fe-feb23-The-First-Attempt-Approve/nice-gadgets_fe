import { Gadget } from './Gadget';

export type RequestWithParamsResult = {
  allPhonesCount: number;
  filteredCount: number,
  visiblePhones: Gadget[];
};
