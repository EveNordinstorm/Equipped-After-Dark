export interface Product {
    _id: string;
    title: string;
    price: number;
    img: string;
    category: string;
    description?: string;
    sizes?: string[];
    stock: { size: string, stock: number }[];
    type: string;
  }
  