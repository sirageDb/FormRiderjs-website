import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerSupContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeftContainer}>
          <Link href="/">
            <img
              className={styles.logo}
              src="/formRiderLogo.png"
              alt="FormRiderLogo"
            />
          </Link>
        </div>
        <div className={styles.headerRightContainer}>
          <Link href="/docs/introduction">
            <div className={styles.headerButton + " " + styles.docsLink}>
              Docs
            </div>
          </Link>
          <Link href={"/docs/installation"}>
          <div
              className={styles.headerButton + " " + styles.installLink}
            >
              Install
            </div>
          </Link>
          <div className={styles.version}>v1.0.0-Beta</div>
          <div className={styles.headerGithubIcon}>
            <a href="https://github.com/sirageDb/FormRiderjs" target="_blank">
              <img
                className={styles.headerIcon}
                src="/github.svg"
                alt="github link to Form Rider"
              />
            </a>
          </div>
          <div>
            <a href="https://discord.gg/4SbzkHrm" target="_blank">
              <img
                className={styles.headerIcon}
                src="/discord.svg"
                alt="slack link to Form Rider community"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.headerContainerPhone}>
        <div className={styles.headerLeftContainer}>
          <Link href="/">
            <img
              className={styles.logoPhone}
              src="/brand.png"
              alt="FormRiderLogo"
            />
          </Link>
        </div>
        <div className={styles.headerRightContainer}>
          <Link href="/docs/introduction">
            <div className={styles.headerButton + " " + styles.docsLink}>
              Docs
            </div>
          </Link>

          <div className={styles.headerGithubIcon}>
            <a href="https://github.com/sirageDb/FormRiderjs" target="_blank">
              <img
                className={styles.headerIcon}
                src="/github.svg"
                alt="github link to Form Rider"
              />
            </a>
          </div>
          <div>
            <a href="https://discord.gg/4SbzkHrm" target="_blank">
              <img
                className={styles.headerIcon}
                src="/discord.svg"
                alt="slack link to Form Rider community"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
