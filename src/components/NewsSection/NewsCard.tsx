import type { Post } from "@/constants/mock/news";
import Image from "next/image";
import Link from "next/link";
import { Typography, Button, Card } from "@/components/ui";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  post: Post;
}

export const NewsCard = ({ post }: NewsCardProps) => {
  return (
    <Card className={styles.card}>
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
              <Typography variant="text-lg" className={styles.title}>
                {post.title}
              </Typography>
            )}
            {post.description && <Typography>{post.description}</Typography>}
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <Typography variant="text-sm">{post.date}</Typography>
        <Button variant="outline" render={<Link href={`/news/${post.id}`} />} nativeButton={false}>
          Читать далее
        </Button>
      </footer>
    </Card>
  );
};
