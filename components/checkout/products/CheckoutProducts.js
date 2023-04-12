import { FaStaylinked } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function CheckoutProducts({ cart }) {
  return (
    <div className={styles.products}>
      <div className={styles.products__header}>
        {/* Render a heading "Cart" */}
        <h1>Cart</h1>
        {/* Display the total number of items in the cart */}
        <span>
          {cart.products.length == 1
            ? "1 item"
            : `${cart.products.length} items`}
        </span>
      </div>
      <div className={styles.products__wrap}>
        {/* Iterate through the products in the cart and render each product */}
        {/* Render the main product image, color, size, and inventory */}
        {cart.products.map((product, i) => (
          <div key={i} className={styles.product}>
            <div className={styles.product__img}>
              <img src={product.image} alt="" />
              <div className={styles.product__infos}>
                <img src={product.color.image} alt="" />
                <span>{product.size}</span>
                <span>x{product.qty}</span>
              </div>
            </div>
            <div className={styles.product__name}>
              {/* Render the product name, truncated to 18 characters if it's longer */}
              {product.name.length > 18
                ? `${product.name.substring(0, 18)}...`
                : product.name}
            </div>
            <div className={styles.product__price}>
              {/* Render the total price for this product (price * quantity), formatted to two decimal places */}
              ${(product.price * product.qty).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.products__total}>
        {/* Render the cart's subtotal */}
        Subtotal : <b>${cart.cartTotal}</b>
      </div>
    </div>
  );
}
