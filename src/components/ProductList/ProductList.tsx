import { FC } from 'react';
import { Gadget } from '../../types/Gadget';
import { ProductCard } from '../ProductCard';

interface Props {
  gadgets: Gadget[];
}

export const ProductList: FC<Props> = ({ gadgets }) => (
  <div className="gadgets-list">
    {gadgets.map((item: Gadget) => (
      <ProductCard key={item.id} phone={item} />
    ))}
  </div>
);
