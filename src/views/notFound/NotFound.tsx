import styles from './NotFound.module.css';

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <h1 style={{display: "block", justifyContent:"center", margin: 0 }} className="titleErroContainer">404!</h1>
        <p style={{margin: 0}}>Not Found.</p>
      </div>
    </div>
  );
}