import type { Post } from "@/mock/posts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import styles from "./PostCard.module.css";

interface PostCardProps extends React.ComponentProps<"article"> {
  post: Post;
}

export const PostCard = ({ post, className, ...props }: PostCardProps) => {
  return (
    <article className={clsx(styles.card, className)} {...props}>
      <Image
        src={post.imageUrl}
        alt={post.date}
        width={300}
        height={200}
        className={styles.image}
      />

      {(post.title || post.description) && (
        <div className={styles.content}>
          <div className="stack-sm">
            {post.title && (
              <Typography variant="title-md" className={styles.title}>
                {post.title}
              </Typography>
            )}
            {post.description && <Typography>{post.description}</Typography>}
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <Typography>{post.date}</Typography>
        <Button variant="outline" render={<Link href={`/news/${post.id}`} />} nativeButton={false}>
          Читать далее
        </Button>
      </footer>
    </article>
  );
};
