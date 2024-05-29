import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <>
      <section className={styles.bannerSection}>
        <article className={styles.bannerTitle}>
          <span className={styles.bannerSpan}>tecnología</span>
          <span className={styles.bannerSpan}>renovada</span>
        </article>
      </section>
    </>
  );
}
