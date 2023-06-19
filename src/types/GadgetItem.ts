interface Description {
  'title': string;
  'text': string[]
}

export interface GadgetItem {
  'id': string;
  'category': string;
  'namespaceId': string;
  'name': string;
  'capacityAvailable': string[];
  'capacity': string;
  'priceRegular': number;
  'priceDiscount': number | null;
  'colorsAvailable': string[];
  'color': string;
  'images': string[];
  'description': Description[];
  'screen': string;
  'resolution': string;
  'processor': string;
  'ram': string;
  'camera': string;
  'zoom': string;
  'cell': string[];
  'quantity'?: number;
}
