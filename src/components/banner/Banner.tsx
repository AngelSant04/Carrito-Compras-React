import styles from "./Banner.module.css";

export default function Banner(props) {
  return (
    <>
      <section className={styles.bannerSection}>
        <article className={styles.bannerTitle}>
          <span className={styles.bannerSpan}>{props.first}</span>
          <span className={styles.bannerSpan}>{props.second}</span>
        </article>
      </section>
    </>
  );
}
