import styles from "../styles.module.scss";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
export default function Card({ category, categoryHandler, replaceQuery }) {
  const [show, setShow] = useState(false);
  const check = replaceQuery("category", category._id);
  return (
    <>
      <section>
        {/* When the list item is clicked, it triggers the categoryHandler function with the category ID as an argument. */}
        <li onClick={() => categoryHandler(category._id)}>
          {/* The input radio element allows users to select a single category to filter. */}
          <input
            type="radio"
            name="filter"
            id={category._id}
            // The input radio is checked based on the 'check.active' value.
            checked={check.active}
          />
          {/* The label element is associated with the input radio element and displays the category name. */}
          <label htmlFor={category._id}>
            <a>{category.name}</a>
          </label>
          {/* A span element is used to display either a minus sign (FaMinus) or a plus sign (BsPlusLg) based on the 'show' variable. */}
          <span>{show ? <FaMinus /> : <BsPlusLg />}</span>
        </li>
      </section>
    </>
  );
}
