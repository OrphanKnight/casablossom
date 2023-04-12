import styles from "./styles.module.scss";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { compareArrays } from "./../../../utils/arrays_utils";
import { toggleAllSelected } from "./../../../store/cartSlice";
export default function CartHeader() {
  const { cart } = useSelector((state) => ({ ...state }));
  const cartItems = cart.cartItems;
  const selected = cartItems.filter((item) => item.selected);
  const [active, setActive] = useState();
  const dispatch = useDispatch();
  const memoizedCompareArrays = useCallback(compareArrays, []);

  useEffect(() => {
    const check = memoizedCompareArrays(cartItems, selected);

    setActive(check);
  }, [cart.cartItems]);

  const handleSelect = () => {
    if (selected.length !== cartItems.length) {
      dispatch(toggleAllSelected(true));
    } else {
      dispatch(toggleAllSelected(false));
    }
  };
  return (
    <div className={`${styles.cart__header} ${styles.card}`}>
      <h1>Item Summary({cartItems.length})</h1>
      <div className={styles.flex} onClick={() => handleSelect()}>
        <div
          data-testid="checkbox"
          className={`${styles.checkbox} ${active ? styles.active : ""}`}
        ></div>
        <span>Select all items</span>
      </div>
    </div>
  );
}
