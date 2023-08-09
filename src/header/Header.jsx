import styles from "./header.module.css";
import Timer from "../timer/Timer";
export default function Header() {
  return (
    <div className={styles.headerBox}>
      <p className={styles.title}>NOisePHilter</p>
      <Timer />
    </div>
  );
}
