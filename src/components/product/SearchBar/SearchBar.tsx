import { MenuIcon, SearchIcon } from "lucide-react";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <button className={styles.button}>
        <MenuIcon className={styles.buttonIcon} />
      </button>
      <input
        type="search"
        placeholder="Найти что-то для рыбалки..."
        className={styles.searchInput}
      />
      <button className={styles.button}>
        <SearchIcon className={styles.buttonIcon} />
      </button>
    </div>
  );
};
