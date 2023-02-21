import styles from "./styles.module.scss";
import Navbar from "./Nav";

export default function Header({}) {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
}
