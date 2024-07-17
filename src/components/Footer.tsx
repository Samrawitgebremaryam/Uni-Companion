import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.submitButton}>
          <div className={styles.socialMediaLinks}>
            <div className={styles.facebook}>
              <div className={styles.facebookChild} />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className={styles.instagram}>
              <div className={styles.instagramChild} />
              <img
                className={styles.vectorIcon1}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div className={styles.linkdin}>
              <div className={styles.linkdinChild} />
              <img
                className={styles.vectorIcon2}
                loading="lazy"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className={styles.twitter}>
              <div className={styles.twitterChild} />
              <img
                className={styles.vectorIcon3}
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.companyInfo}>
          <div className={styles.companyDetails}>
            <div className={styles.aboutDescription}>
              <b className={styles.company}>Company</b>
            </div>
            <div className={styles.companyLinks}>
              <div className={styles.strategicTitle}>
                <div className={styles.termsOfService}>Terms of service</div>
              </div>
              <div className={styles.fAQItemOneAnswerContaine}>
                <div className={styles.privacyPolicy}>Privacy policy</div>
              </div>
              <div className={styles.revolutionStatement}>
                <div className={styles.legalNotice}>Legal notice</div>
              </div>
              <div className={styles.about}>About</div>
              <div className={styles.careers}>Careers</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.resourcesWrapper}>
              <b className={styles.resources}>Resources</b>
            </div>
            <div className={styles.resourcesLinks}>
              <div className={styles.blogWrapper}>
                <div className={styles.blog}>Blog</div>
              </div>
              <div className={styles.helpCenter}>Help center</div>
              <div className={styles.securityWrapper}>
                <div className={styles.security}>Security</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactParent}>
          <b className={styles.contact}>Contact</b>
          <div className={styles.contactLinks}>
            <div className={styles.contactUs}>Contact us</div>
            <div className={styles.support}>Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
