import { MenuIcon, SearchIcon } from "lucide-react";
import { Button, Input } from "../ui";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Button variant="accent" size="icon">
        <MenuIcon />
      </Button>

      <Input variant="dark" type="search" placeholder="Найти что-то для рыбалки..." />

      <Button variant="accent" size="icon">
        <SearchIcon />
      </Button>
    </div>
  );
};
