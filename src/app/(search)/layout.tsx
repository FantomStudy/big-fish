import { SearchBar } from "@/components/product/SearchBar";

const SearchLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <div className="container">
      <SearchBar />
      {children}
    </div>
  );
};

export default SearchLayout;
