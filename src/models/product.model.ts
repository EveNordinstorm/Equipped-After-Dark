export interface Product {
    _id: string;
    title: string;
    price: number;
    img: string;
    category: string;
    description?: string;
    sizes?: string[];
    stockLevels: { size: string, stock: number }[];
    type: string;
  }

  export interface Size {
    size: string;
    stockLevels: number;
  }
  