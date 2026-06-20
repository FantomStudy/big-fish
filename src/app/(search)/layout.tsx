import { SearchBar } from "@/components/SearchBar";

const SearchLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      <div className="container">
        <SearchBar />
      </div>

      {children}
    </>
  );
};

export default SearchLayout;
