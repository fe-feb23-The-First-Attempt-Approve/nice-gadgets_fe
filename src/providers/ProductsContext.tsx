import {
  createContext,
  FC,
  useEffect,
  useState,
  useContext, useMemo,
} from 'react';
import { Gadget } from '../types/Gadget';
import { getProducts, getHotProducts } from '../api/products';

interface ProductsContextValue {
  gadgets: Gadget[];
  hotGadgets: Gadget[];
  getProductAmount: (category: string) => number;
  loadGadgets: () => void;
  sortedByNewModel: Gadget[];
  productsAmount: {
    phonesAmount: number,
    tabletsAmount: number,
    accessoriesAmount: number,
  }
}

export const ProductsContext = createContext<ProductsContextValue>({
  gadgets: [],
  hotGadgets: [],
  getProductAmount: () => 0,
  loadGadgets: () => {},
  sortedByNewModel: [],
  productsAmount: {
    phonesAmount: 0,
    tabletsAmount: 0,
    accessoriesAmount: 0,
  },
});

export const ProductsProvider: FC = ({ children }) => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [hotGadgets, setHotGadgets] = useState<Gadget[]>([]);
  const getProductAmount = (category: string) => {
    return gadgets.filter(gadget => (
      gadget.category === category
    )).length;
  };

  const loadGadgets = async () => {
    const gadgetsFromServer = await getProducts();
    const hotGadgetsFromServer = await getHotProducts();

    setGadgets(gadgetsFromServer);
    setHotGadgets(hotGadgetsFromServer);
  };

  useEffect(() => {
    loadGadgets();
  }, []);

  const sortedByNewModel = useMemo(() => (
    [...gadgets].sort((firstGadget, secondGadget) => (
      secondGadget.year - firstGadget.year
    ))
  ), [gadgets]);

  const productsAmount = {
    phonesAmount: getProductAmount('phones'),
    tabletsAmount: getProductAmount('tablets'),
    accessoriesAmount: getProductAmount('accessories'),
  };

  const contextValue: ProductsContextValue = {
    gadgets,
    hotGadgets,
    getProductAmount,
    loadGadgets,
    sortedByNewModel,
    productsAmount,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextValue => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      'useProducts must be used within a ProductsContextProvider',
    );
  }

  return context;
};
