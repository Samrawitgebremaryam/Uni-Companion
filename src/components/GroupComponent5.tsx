import { FunctionComponent } from "react";
import styles from "./GroupComponent5.module.css";

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
        <div className={styles.frameContainer}>
          <div className={styles.socialLinksWrapper}>
            <div className={styles.socialLinks}>
              <div className={styles.facebook}>
                <div className={styles.socialLinkIconsBackground} />
                <img
                  className={styles.socialLinkIcons}
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
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.companyWrapper}>
                <b className={styles.company}>Company</b>
              </div>
              <div className={styles.termsOfServiceWrapper}>
                <div className={styles.termsOfService}>Terms of service</div>
              </div>
              <div className={styles.privacyPolicyWrapper}>
                <div className={styles.privacyPolicy}>Privacy policy</div>
              </div>
              <div className={styles.legalNoticeWrapper}>
                <div className={styles.legalNotice}>Legal notice</div>
              </div>
              <div className={styles.aboutWrapper}>
                <div className={styles.about}>About</div>
              </div>
              <div className={styles.careersWrapper}>
                <div className={styles.careers}>Careers</div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.resourcesWrapper}>
                <b className={styles.resources}>Resources</b>
              </div>
              <div className={styles.blogWrapper}>
                <div className={styles.blog}>Blog</div>
              </div>
              <div className={styles.helpCenter}>Help center</div>
              <div className={styles.securityWrapper}>
                <div className={styles.security}>Security</div>
              </div>
            </div>
          </div>
          <div className={styles.contactParent}>
            <b className={styles.contact}>Contact</b>
            <div className={styles.contactUsParent}>
              <div className={styles.contactUs}>Contact us</div>
              <div className={styles.support}>Support</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.allRightsReservedParent}>
            <div className={styles.allRightsReserved}>
              ©. 2022. All rights reserved
            </div>
            <div className={styles.languageRegionEnglishInParent}>
              <div className={styles.languageRegionContainer}>
                <span>{`Language & region: `}</span>
                <span className={styles.englishIn}>English (IN)</span>
              </div>
              <div className={styles.languageIconWrapper}>
                <img
                  className={styles.languageIcon}
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
