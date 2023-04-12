import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import Socials from "./socials";
import SimilarSwiper from "./similarswiper/SimilarSwiper";
import ControlledAccordions from "./accordion/Accordion.js";
import axios from "axios";
import { addToCart, updateCart } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DialogModal from "@/components/DialogModal";

export default function Infos({ product, setActiveImg, products }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(router.query.size);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const addToCartHandler = async () => {
    if (!router.query.size) {
      setError("Please Select a size");
      return;
    }
    const { data } = await axios.get(
      `/api/product/${product._id}?style=${product.style}&size=${router.query.size}`
    );
    if (qty > data.quantity) {
      setError(
        "The Quantity you have choosed is more than in stock. Try and lower the Qty"
      );
    } else if (data.quantity < 1) {
      setError("This Product is out of stock.");
      return;
    } else {
      let _uid = `${data._id}_${product.style}_${router.query.size}_${comment}`;
      console.log(_uid);
      let exist = cart?.cartItems?.find((p) => p._uid === _uid);
      if (exist) {
        console.log("It Exists");
        let newCart = cart.cartItems.map((p) => {
          if (p._uid == exist._uid) {
            return { ...p, qty: qty };
          }
          return p;
        });
        dispatch(updateCart(newCart));
      } else {
        console.log("add to cart");
        dispatch(
          addToCart({
            ...data,
            qty,
            size: data.size,
            customize: comment,
            _uid,
          })
        );
      }
    }
  };
  //=========================================================
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    setSize("");
    setQty(1);
  }, [router.query.style]);
  //==================================================
  useEffect(() => {
    if (qty > product.quantity) {
      setQty(product.quantity);
    }
  }, [router.query.size]);
  //==================================================
  return (
    <div className={styles.infos}>
      <DialogModal />
      <div className={styles.info__container}>
        <h1 className={styles.infos__name}>{product.name}</h1>
        <h2 className={styles.infos__sku}>{product.sku}</h2>
        <div className={styles.infos__price}>
          {!size ? <h2>{product.priceRange}</h2> : <h1>${product.price}</h1>}
          {product.discount > 0 ? (
            <h3>
              {size && <span>${product.priceBefore}</span>}
              <span>(-{product.discount}%)</span>
            </h3>
          ) : (
            ""
          )}
        </div>

        <span className={styles.infos__shipping}>
          {product.shipping
            ? `$${product.shipping} Shipping fee`
            : "Free Shipping"}
        </span>
        <span>
          {size
            ? product.quantity
            : product.sizes.reduce((start, next) => start + next.qty, 0)}{" "}
          pieces available.
        </span>

        <div className={styles.info__sizes}>
          <h4>Select a Size : </h4>
          <div className={styles.infos__sizes_wrap}>
            {product.sizes.map((size, i) => (
              <Link
                key={i}
                href={`/product/${product.slug}?style=${router.query.style}&size=${i}`}
              >
                <div
                  className={`${styles.infos__sizes_size} ${
                    i == router.query.size && styles.active_size
                  }`}
                  onClick={() => setSize(size.size)}
                >
                  {size.size}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.infos__colors}>
          {product.colors &&
            product.colors.map((color, i) => (
              <span
                key={i}
                className={i == router.query.style ? styles.active_color : ""}
                onMouseOver={() =>
                  setActiveImg(product.subProducts[i].images[0].url)
                }
                onMouseLeave={() => setActiveImg("")}
              >
                <Link href={`/product/${product.slug}?style=${i}`}>
                  <img src={color.image} alt="" />
                </Link>
              </span>
            ))}
        </div>

        <div className={styles.infos__qty}>
          <button
            data-testid="minus-button"
            onClick={() => qty > 1 && setQty((current) => current - 1)}
          >
            <TbMinus />
          </button>
          <span data-testid="qty-display">{qty}</span>
          <button
            data-testid="plus-button"
            onClick={() =>
              qty < product.quantity && setQty((current) => current + 1)
            }
          >
            <TbPlus />
          </button>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Add Any Requests Here:
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Write in Here..."
              value={comment}
              onChange={(charsInto) => setComment(charsInto.target.value)}
            ></textarea>
          </div>
        </form>
        <div className={styles.infos__actions}>
          <button
            disabled={product.quantity < 1}
            style={{ cursor: `${product.quantity < 1 ? "not-allowed" : ""}` }}
            onClick={() => addToCartHandler()}
          >
            <RiShoppingBasket2Fill />
            <b>ADD TO BASKET</b>
          </button>
        </div>
        {error && <span className={styles.error}>{error}</span>}
        <>
          <ControlledAccordions
            details={[product.description, ...product.details]}
          />
          <Socials />
          <SimilarSwiper products={products} key="" />
        </>
      </div>
    </div>
  );
}
