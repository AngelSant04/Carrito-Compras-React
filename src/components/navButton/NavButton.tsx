import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

export default function NavButton(props) {
  return (
    <>
      <li className={styles.navLi}>
        <Link className={styles.navA} to={props.link}>
          {props.titulo}
        </Link>
      </li>
    </>
  );
}
