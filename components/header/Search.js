import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Search({ searchHandler }) {
  const router = useRouter();
  const [query, setQuery] = useState(router.query.search || "");
  const { cart } = useSelector((state) => ({ ...state }));
  const handleSearch = (e) => {
    e.preventDefault();
    if (router.pathname !== "/browse") {
      if (query.length > 1) {
        router.push(`/browse?search=${query}`);
      }
    } else {
      searchHandler(query);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <form
          onSubmit={(search) => handleSearch(search)}
          className={styles.searchbar}
        >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(search) => setQuery(search.target.value)}
          />
          <button
            type="submit"
            className={styles.searchbar__icon}
            aria-label="Search Submit"
          >
            <RiSearch2Line />
          </button>
        </form>
      </div>
    </div>
  );
}
