import { FunctionComponent } from "react";
import styles from "./GroupComponent4.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.frameParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/group-420.svg" />
      <div className={styles.frameGroup}>
        <img className={styles.frameItem} alt="" src="/group-71.svg" />
        <div className={styles.socialContainer}>
          <div className={styles.socialLinks}>
            <div className={styles.socialPlatforms}>
              <div className={styles.facebook}>
                <div className={styles.platformShapes} />
                <img
                  className={styles.platformIcons}
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.instagram}>
                <div className={styles.instagramChild} />
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
              <div className={styles.linkdin}>
                <div className={styles.linkdinChild} />
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
              <div className={styles.twitter}>
                <div className={styles.twitterChild} />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-9.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.footerInfo}>
            <div className={styles.footerLinks}>
              <div className={styles.companyInfo}>
                <b className={styles.company}>Company</b>
              </div>
              <div className={styles.linkNames}>
                <div className={styles.termsOfService}>Terms of service</div>
              </div>
              <div className={styles.linkNames1}>
                <div className={styles.privacyPolicy}>Privacy policy</div>
              </div>
              <div className={styles.linkNames2}>
                <div className={styles.legalNotice}>Legal notice</div>
              </div>
              <div className={styles.aboutLink}>
                <div className={styles.about}>About</div>
              </div>
              <div className={styles.careersLink}>
                <div className={styles.careers}>Careers</div>
              </div>
            </div>
            <div className={styles.additionalLinks}>
              <div className={styles.resourcesLink}>
                <b className={styles.resources}>Resources</b>
              </div>
              <div className={styles.additionalLinkNames}>
                <div className={styles.blog}>Blog</div>
              </div>
              <div className={styles.helpCenter}>Help center</div>
              <div className={styles.additionalLinkNames1}>
                <div className={styles.security}>Security</div>
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
        <div className={styles.copyright}>
          <div className={styles.copyrightContainer}>
            <div className={styles.allRightsReserved}>
              ©. 2022. All rights reserved
            </div>
            <div className={styles.language}>
              <div className={styles.languageRegionContainer}>
                <span>{`Language & region: `}</span>
                <span className={styles.englishIn}>English (IN)</span>
              </div>
              <div className={styles.languageIcon}>
                <img
                  className={styles.vectorIcon3}
                  loading="lazy"
                  alt=""
                  src="/vector-10.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
