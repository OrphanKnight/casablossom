import styles from "../styles.module.scss";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { UseState } from "react";
export default function Size({ size }) {
  const [show, setShow] = UseState(false);

  return (
    <label htmlFor={size} className={styles.filter__sizes_size}>
      <input type="checkbox" name="size" id={size} />
      <label htmlFor={size}>{size}</label>
    </label>
  );
}
