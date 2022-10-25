export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    types: string;
    sizes: string;
    count: number;
  }
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }