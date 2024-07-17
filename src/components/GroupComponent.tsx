import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/group-4201.svg" />
      <div className={styles.frameGroup}>
        <img className={styles.frameItem} alt="" src="/group-713.svg" />
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMediaLinks}>
            <div className={styles.socialMediaIcons}>
              <div className={styles.facebook}>
                <div className={styles.icons} />
                <img
                  className={styles.socialLogosIcon}
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
              <div className={styles.instagram}>
                <div className={styles.instagramChild} />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-22.svg"
                />
              </div>
              <div className={styles.linkdin}>
                <div className={styles.linkdinChild} />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-32.svg"
                />
              </div>
              <div className={styles.twitter}>
                <div className={styles.twitterChild} />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-42.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.links}>
              <div className={styles.companyInfo}>
                <b className={styles.company}>Company</b>
              </div>
              <div className={styles.linkCategories}>
                <div className={styles.termsOfService}>Terms of service</div>
              </div>
              <div className={styles.linkCategories1}>
                <div className={styles.privacyPolicy}>Privacy policy</div>
              </div>
              <div className={styles.linkCategories2}>
                <div className={styles.legalNotice}>Legal notice</div>
              </div>
              <div className={styles.linkCategories3}>
                <div className={styles.about}>About</div>
              </div>
              <div className={styles.careersInfo}>
                <div className={styles.careers}>Careers</div>
              </div>
            </div>
            <div className={styles.resourcesInfo}>
              <div className={styles.resources}>
                <b className={styles.resources1}>Resources</b>
              </div>
              <div className={styles.helpInfo}>
                <div className={styles.helpCategories}>
                  <div className={styles.blog}>Blog</div>
                </div>
                <div className={styles.helpCenter}>Help center</div>
                <div className={styles.helpCategories1}>
                  <div className={styles.security}>Security</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <b className={styles.contact}>Contact</b>
            <div className={styles.supportInfo}>
              <div className={styles.contactUs}>Contact us</div>
              <div className={styles.support}>Support</div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightInfo}>
          <div className={styles.copyright}>
            <div className={styles.allRightsReserved}>
              ©. 2022. All rights reserved
            </div>
            <div className={styles.languageInfo}>
              <div className={styles.languageRegionContainer}>
                <span>{`Language & region: `}</span>
                <span className={styles.englishIn}>English (IN)</span>
              </div>
              <div className={styles.languageIcon}>
                <img className={styles.globeIcon} alt="" src="/vector-51.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
