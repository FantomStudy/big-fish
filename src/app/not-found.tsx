import styles from "./not-found.module.css";

const NotFoundPage = () => {
  return (
    <main className="container">
      <div className={styles.wrapper}>
        <img src="/not-found/code.svg" alt="404" className={styles.number} />
        <p>Упс... Похоже не клюёт...</p>

        <img src="/not-found/illustration.svg" alt="illustration" className={styles.illustration} />
      </div>
    </main>
  );
};

export default NotFoundPage;
