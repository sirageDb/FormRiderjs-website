import Link from "next/Link";
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
{/*           <Link href="/notifications">
            <div
              className={styles.headerButton + " " + styles.notificationsLink}
            >
              Embedded Notifications
            </div>
          </Link> */}
          <Link href={"/docs/installation"}>
          <div
              className={styles.headerButton + " " + styles.installLink}
            >
              Install
            </div>
          </Link>
          <div className={styles.version}>v1.0.0-Beta</div>
          <div className={styles.headerGithubIcon}>
            <a href="https://github.com/formRiderjs/formRiderjs" target="_blank">
              <img
                className={styles.headerIcon}
                src="/github.svg"
                alt="github link to Form Rider"
              />
            </a>
          </div>
          <div>
            <a href="https://ilovesemicolons.io" target="_blank">
              <img
                className={styles.headerIcon}
                src="/slack.svg"
                alt="slack link to Form Rider community"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
