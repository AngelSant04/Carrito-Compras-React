// Interfaz optimizada
export default interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  cantidad?: number;
  images?: Array<string>;
  colors?: Array<string>;
  image?: string;
  color?: string;
  onsale?: boolean;
}
