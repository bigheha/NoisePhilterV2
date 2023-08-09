import GithubIcon from "./GithubIcon";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footerBox}>
      <p className={styles.signature}>
        <span>made by</span>
        {"  "}
        <a className={styles.GitHubLink} href="https://github.com/bigheha">
          <span className={styles.icon}>
            <GithubIcon />
          </span>
          <span>BigHeha</span>
        </a>
      </p>
    </div>
  );
}
