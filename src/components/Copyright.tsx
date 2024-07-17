import { FunctionComponent } from "react";
import styles from "./Copyright.module.css";

export type CopyrightType = {
  className?: string;
};

const Copyright: FunctionComponent<CopyrightType> = ({ className = "" }) => {
  return (
    <div className={[styles.copyright, className].join(" ")}>
      <footer className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/group-712.svg" />
        <div className={styles.companyInfo}>
          <div className={styles.socialMedia}>
            <div className={styles.platformIcons}>
              <div className={styles.facebook}>
                <div className={styles.iconBackgrounds} />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
              <div className={styles.instagram}>
                <div className={styles.instagramChild} />
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-31.svg"
                />
              </div>
              <div className={styles.linkdin}>
                <div className={styles.linkdinChild} />
                <img
                  className={styles.vectorIcon2}
                  loading="lazy"
                  alt=""
                  src="/vector-12.svg"
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
            </div>
          </div>
          <div className={styles.companyDetails}>
            <div className={styles.companyName}>
              <div className={styles.companyTitle}>
                <b className={styles.company}>Company</b>
              </div>
              <div className={styles.legalLinks}>
                <div className={styles.legalItems}>
                  <div className={styles.termsOfService}>Terms of service</div>
                </div>
                <div className={styles.legalItems1}>
                  <div className={styles.privacyPolicy}>Privacy policy</div>
                </div>
                <div className={styles.legalItems2}>
                  <div className={styles.legalNotice}>Legal notice</div>
                </div>
                <div className={styles.about}>About</div>
                <div className={styles.careers}>Careers</div>
              </div>
            </div>
            <div className={styles.resourceLinks}>
              <div className={styles.resourceTitle}>
                <b className={styles.resources}>Resources</b>
              </div>
              <div className={styles.resourceItems}>
                <div className={styles.resourceNames}>
                  <div className={styles.blog}>Blog</div>
                </div>
                <div className={styles.helpCenter}>Help center</div>
                <div className={styles.resourceNames1}>
                  <div className={styles.security}>Security</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <b className={styles.contact}>Contact</b>
            <div className={styles.contactDetails}>
              <div className={styles.contactUs}>Contact us</div>
              <div className={styles.support}>Support</div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightNotice}>
          <div className={styles.copyrightDetails}>
            <div className={styles.allRightsReserved}>
              ©. 2022. All rights reserved
            </div>
            <div className={styles.languageSettings}>
              <div className={styles.languageRegionContainer}>
                <span>{`Language & region: `}</span>
                <span className={styles.englishIn}>English (IN)</span>
              </div>
              <div className={styles.languageIcon}>
                <img
                  className={styles.dropdownIcon}
                  loading="lazy"
                  alt=""
                  src="/social-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Copyright;
