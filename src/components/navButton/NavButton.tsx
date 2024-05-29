import styles from "./NavButton.module.css";

export default function NavButton(props) {
  return (
    <>
      <li className={styles.navLi}>
        <a className={styles.navA} href={props.link}>
          {props.titulo}
        </a>
      </li>
    </>
  );
}
