import CartHeader from "@/components/cart/cartHeader";
import Empty from "@/components/cart/empty";
import Header from "@/components/cart/header";
import Product from "@/components/cart/product";
import styles from "@/styles/cart.module.scss";
import { UseDispatch, useSelector } from "react-redux";
import Checkout from "@/components/cart/checkout";
import { UseEffect, UseState } from "react";
import { Router, UseRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { saveCart } from "@/requests/user";

export default function Home({ country }) {
  const Router = UseRouter();
  const { data: session } = useSession();
  const [selected, setSelected] = UseState([]);
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = UseDispatch();

  const [shippingFee, setShippingFee] = UseState(0);
  const [subtotal, setSubtotal] = UseState(0);
  const [total, setTotal] = UseState(0);
  UseEffect(() => {
    setShippingFee(
      selected.reduce((a, c) => a + Number(c.shipping), 0).toFixed(2)
    );
    setSubtotal(selected.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2));
    setTotal(
      (
        selected.reduce((a, c) => a + c.price * c.qty, 0) + Number(shippingFee)
      ).toFixed(2)
    );
  }, [selected]);

  const saveCartToDbHandler = async () => {
    if (session) {
      const res = saveCart(selected);
      Router.push("/checkout");
    } else {
      signIn();
    }
  };
  return (
    <>
      <Header />
      <div className={styles.cart}>
        {cart.cartItems.length > 0 ? (
          <div className={styles.cart__container}>
            <CartHeader
              cartItems={cart.cartItems}
              selected={selected}
              setSelected={setSelected}
            />
            <div className={styles.cart__products}>
              {cart.cartItems.map((product) => (
                <Product
                  product={product}
                  key={product._uid}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
            <Checkout
              subtotal={subtotal}
              shippingFee={shippingFee}
              total={total}
              selected={selected}
              saveCartToDbHandler={saveCartToDbHandler}
            />
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
}
