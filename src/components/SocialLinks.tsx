import { FunctionComponent } from "react";
import styles from "./SocialLinks.module.css";

export type SocialLinksType = {
  className?: string;
};

const SocialLinks: FunctionComponent<SocialLinksType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.socialLinks, className].join(" ")}>
      <img className={styles.socialLinksChild} alt="" src="/group-712.svg" />
      <img className={styles.socialIcon} alt="" src="/social-icon.svg" />
      <div className={styles.linkdin}>
        <div className={styles.socialIconBackgrounds} />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
      </div>
      <div className={styles.facebook}>
        <div className={styles.facebookChild} />
        <img
          className={styles.vectorIcon1}
          loading="lazy"
          alt=""
          src="/vector-21.svg"
        />
      </div>
      <div className={styles.instagram}>
        <div className={styles.instagramChild} />
        <img
          className={styles.vectorIcon2}
          loading="lazy"
          alt=""
          src="/vector-31.svg"
        />
      </div>
      <div className={styles.twitter}>
        <div className={styles.twitterChild} />
        <img
          className={styles.vectorIcon3}
          loading="lazy"
          alt=""
          src="/vector-41.svg"
        />
      </div>
    </footer>
  );
};

export default SocialLinks;
