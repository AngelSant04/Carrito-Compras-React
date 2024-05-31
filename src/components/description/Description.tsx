import styles from "./Description.module.css";

export default function Description(props) {

  const {product} = props;

  return (
    <>
      <div className={styles.productDescriptionBlock}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <form className={styles.productSelector}>
          <fieldset className={styles.productFieldset}>
            <label className={styles.productLabel} htmlFor="color">
              Color
            </label>
            <select
              className={styles.productSelect}
              // type="text"
              // placeholder="Selecciona un color"
              id="color"
            >
              {product.colors.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </fieldset>
        </form>
        <div className={styles.productDescription}>
          <span className={styles.productLabel}>Descripción</span>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}
