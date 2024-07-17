import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import SocialLinks from "../components/SocialLinks";
import styles from "./IntroToUni.module.css";

const IntroToUni: FunctionComponent = () => {
  return (
    <div className={styles.introToUni}>
      <FrameComponent1 />
      <section className={styles.frameParent}>
        <FrameComponent />
        <SocialLinks />
      </section>
      <section className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumns}>
            <div className={styles.companyColumn}>
              <b className={styles.company}>Company</b>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyLinks}>
                <div className={styles.termsOfService}>Terms of service</div>
              </div>
              <div className={styles.companyLinks1}>
                <div className={styles.privacyPolicy}>Privacy policy</div>
              </div>
              <div className={styles.companyLinks2}>
                <div className={styles.legalNotice}>Legal notice</div>
              </div>
              <div className={styles.about}>About</div>
              <div className={styles.careers}>Careers</div>
            </div>
          </div>
          <div className={styles.resourcesColumn}>
            <div className={styles.resourcesTitle}>
              <b className={styles.resources}>Resources</b>
            </div>
            <div className={styles.resourceLinks}>
              <div className={styles.resourceLinkTitles}>
                <div className={styles.blog}>Blog</div>
              </div>
              <div className={styles.helpCenter}>Help center</div>
              <div className={styles.resourceLinkTitles1}>
                <div className={styles.security}>Security</div>
              </div>
            </div>
          </div>
          <div className={styles.contactColumn}>
            <b className={styles.contact}>Contact</b>
            <div className={styles.contactInfo}>
              <div className={styles.contactUs}>Contact us</div>
              <div className={styles.support}>Support</div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.allRightsReserved}>
            ©. 2022. All rights reserved
          </div>
          <div className={styles.languageRegionContainer}>
            <span>{`Language & region: `}</span>
            <span className={styles.englishIn}>English (IN)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroToUni;
