import { PostCard } from "@/components/post/PostCard";
import { PostGrid } from "@/components/post/PostGrid";
import { BrandTitle } from "@/components/ui/BrandTitle";
import { getPosts } from "@/mock/posts";

const NewsPage = () => {
  const posts = getPosts();

  return (
    <main className="stack">
      <BrandTitle.News />

      <PostGrid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostGrid>
    </main>
  );
};

export default NewsPage;
