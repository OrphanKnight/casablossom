import ListItem from "./ListItemOfCategory";
import styles from "./styles.module.scss";

export default function ListCategories({ categories, setCategories }) {
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <ListItem
          category={category}
          key={category._id}
          setCategories={setCategories}
        />
      ))}
    </ul>
  );
}
