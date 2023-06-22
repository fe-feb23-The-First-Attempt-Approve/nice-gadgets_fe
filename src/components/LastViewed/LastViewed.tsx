import { useEffect, useState } from 'react';
import { Gadget } from '../../types/Gadget';
import { ProductCard } from '../ProductCard';

export const LastViewed = () => {
  const [lastViewedGagets, setLastViewedGagets] = useState<Gadget[] | null>([]);

  useEffect(() => {
    const storedGagets = localStorage.getItem('gagets');

    if (storedGagets) {
      const parsedGadgets = JSON.parse(storedGagets);
      const limitedGadgets = [...parsedGadgets]
        .reverse().slice(0, 9);

      setLastViewedGagets(limitedGadgets);
    }
  }, []);

  return (
    <div className="view view_position">
      <h3 className="view__title">
        Last viewed gadgets
      </h3>

      <div className="view__slider-container">
        {lastViewedGagets && lastViewedGagets.map(g => (
          <ProductCard key={g.id} phone={g} />
        ))}
      </div>
    </div>
  );
};
