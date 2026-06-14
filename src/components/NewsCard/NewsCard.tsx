import type { Post } from "@/mock/posts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Typography, Button } from "@/components/ui";
import styles from "./NewsCard.module.css";

interface NewsCardProps extends React.ComponentProps<"article"> {
  post: Post;
}

export const NewsCard = ({ post, className, ...props }: NewsCardProps) => {
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
              <Typography variant="text-xl" className={styles.title}>
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
