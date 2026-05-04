import clsx from "clsx";
import { PostCard } from "@/components/post/PostCard";
import { PostGrid } from "@/components/post/PostGrid";
import { SearchBar } from "@/components/product/SearchBar";
import { Slider } from "@/components/Slider";
import { BrandTitle } from "@/components/ui/BrandTitle";
import { getPosts } from "@/mock/posts";
import styles from "./page.module.css";

const RockGroupPage = () => {
  const posts = getPosts(3);

  return (
    <div className={styles.content}>
      <Slider />
      <div className={clsx("container stack")}>
        <SearchBar />
        <BrandTitle.News />
        <PostGrid>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostGrid>
      </div>
    </div>
  );
};

export default RockGroupPage;
