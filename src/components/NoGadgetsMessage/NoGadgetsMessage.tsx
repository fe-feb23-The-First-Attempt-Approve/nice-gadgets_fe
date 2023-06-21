import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

export const NoGadgetsMessage = () => {
  return (
    <div className="no-gadget-massage no-gadget-massage_position">
      <MdOutlineProductionQuantityLimits
        className="no-gadget-massage__icon bounce-top"
      />

      <h3 className="no-gadget-massage__sorry tracking-in-contract">
        Sorry
      </h3>

      <h3 className="no-gadget-massage__title-sorry">
        no products found
      </h3>
    </div>
  );
};
