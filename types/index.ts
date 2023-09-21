export interface RootLayoutTypes {
  children: React.ReactNode;
}

export interface Product {
  id: number;
  imageSrc?: string | number;
  name?: string;
  price?: string;
  quantity?: number;
}

export interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}

export interface CartState {
  cartData: CartItem[];
  cartDataLength: number;
  totalProductPrice: number;
}

export interface CartItem {
  id: number;
  quantity: number;
  imageSrc: string | number;
  name?: string;
  price?: number;
}


export interface User {
  key?: React.Key;
  _id?: string;
  role?: number;
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  password?: string;
}

export interface AuthState {
  isAuth: boolean;
  user: User | null;
  loading: boolean;
}

export interface CategoryTypes {
  id: number;
  slug: string;
  description?: string;
  imageURL: string;
  logo?: string;
  price?: number | string;
  discounted_price: number;
  discount?: string;
  quantity?: number;
};



export interface Item {
  id: number;
  // Define other properties here
}

export interface HomeData {
  hityProdaz: Item[] | null;
  algoliaData: Item[] | null;
  algoliaDataTwo: Item[] | null;
  skidki: Item[] | null;
  merchant: Item[] | null;
}

export interface SectionProps {
  title: string;
  data: Item[] | undefined;
  Component: React.ComponentType<any>;
}


export interface HeaderNavItemProps {
  icon: string;
  text: string;
  href: string;
  count?: number;
}