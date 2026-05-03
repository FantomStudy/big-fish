import { CartProvider } from "./_contexts/CartContext";

const CartLayout = ({ children }: LayoutProps<"/cart">) => {
  return <CartProvider>{children}</CartProvider>;
};

export default CartLayout;
