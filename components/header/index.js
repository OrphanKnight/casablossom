//https://getbootstrap.com/docs/5.3/examples/
import styles from "./styles.module.scss";
import Navbar from "./Nav";
import UseMe from "./topHeader/UseMe";
export default function Header({ searchHandler }) {
  return (
    <header className={styles.header}>
      <UseMe searchHandler={searchHandler} />
    </header>
  );
}
