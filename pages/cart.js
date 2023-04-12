import CartHeader from "@/components/cart/cartHeader/CartHeader";
import Empty from "@/components/cart/empty";
import Header from "@/components/cart/header";
import Product from "@/components/cart/product";
import styles from "@/styles/cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "@/components/cart/checkout";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { saveCart } from "@/requests/user";

export default function Cart({ country }) {
  const Router = useRouter();
  const { data: session } = useSession();
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [shippingFee, setShippingFee] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const selectedItems = cart.cartItems.filter((item) => item.selected);
  useEffect(() => {
    setShippingFee(
      selectedItems.reduce((a, c) => a + Number(c.shipping), 0).toFixed(2)
    );
    setSubtotal(
      selectedItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)
    );
    setTotal(
      (
        selectedItems.reduce((a, c) => a + c.price * c.qty, 0) +
        Number(shippingFee)
      ).toFixed(2)
    );
  }, [cart.cartItems, shippingFee]);

  const saveCartToDbHandler = async () => {
    if (session) {
      const res = saveCart(selectedItems);
      setTimeout(function () {
        Router.push("/checkout");
      }, 1000);
    } else {
      signIn();
    }
  };
  const handleSelect = (itemId) => {
    dispatch(toggleSelect(itemId));
  };
  return (
    <>
      <Header />
      <div className={styles.cart}>
        {cart.cartItems.length > 0 ? (
          <div className={styles.cart__container}>
            <CartHeader cartItems={cart.cartItems} setSelected={handleSelect} />
            <div className={styles.cart__products}>
              {cart.cartItems.map((product) => (
                <Product
                  product={product}
                  key={product._uid}
                  setSelected={handleSelect}
                />
              ))}
            </div>
            <Checkout
              subtotal={subtotal}
              shippingFee={shippingFee}
              total={total}
              selected={cart.cartItems.filter((item) => item.selected)}
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
