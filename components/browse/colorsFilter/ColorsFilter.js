import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import styles from "../styles.module.scss";

export default function ColorsFilter({ colors, colorHandler, replaceQuery }) {
  const [show, setShow] = useState(true);
  return (
    // The 'styles.filter' container which holds the Colors filter section
    <div className={styles.filter}>
      {/* 
      The filter section header displaying "Colors" and a toggle icon 
      The icon changes based on the 'show' state
      */}
      <h3 onClick={() => setShow(!show)} data-testid="colors-header">
        Colors <span>{show ? <FaMinus /> : <BsPlusLg />}</span>
      </h3>
      {/* If 'show' is true, render the color filter buttons*/}
      {show && (
        <div className={styles.filter__colors}>
          {/* Iterate through the 'colors' array and render a button for each color */}
          {colors.map((color, i) => {
            {
              /* Call 'replaceQuery()' function to check if the current color is active in the query */
            }
            const check = replaceQuery("color", color);
            return (
              // Render a button with a key, a background color, and an optional 'activeFilterColor' class if active
              //also used for testing
              <button
                key={color[i]}
                data-testid={`color-btn-${color}`} // Add this line
                style={{ background: `${color}` }}
                className={check.active ? styles.activeFilterColor : ""}
                onClick={() => colorHandler(check.result)}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
