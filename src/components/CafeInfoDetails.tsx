import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import DepartmentContainer from "./DepartmentContainer";
import styles from "./CafeInfoDetails.module.css";

export type CafeInfoDetailsType = {
  className?: string;
};

const CafeInfoDetails: FunctionComponent<CafeInfoDetailsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.cafeInfoDetails, className].join(" ")}>
      <div className={styles.component6variant3}>
        <FrameComponent
          architecture="Mechanical"
          propWidth="396px"
          propPadding="0px 16px 0px 0px"
        />
        <div className={styles.learnMoreParent}>
          <a className={styles.learnMore}>Learn more</a>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.wrapperRectangle2Parent}>
                <div className={styles.wrapperRectangle2}>
                  <img
                    className={styles.wrapperRectangle2Child}
                    alt=""
                    src="/rectangle-2-2.svg"
                  />
                </div>
                <div className={styles.ellipse} />
                <div className={styles.wrapper3}>
                  <img className={styles.icon} alt="" src="/3-2.svg" />
                </div>
                <div className={styles.ourCafInBlock31BehindThParent}>
                  <img
                    className={styles.ourCafInBlock31BehindTh}
                    alt=""
                    src="/our-caf-in-block-31-behind-the-library-is-open-for-breakfast-100230-pm-lunch-300430-pm-and-dinner-1100-pm130-am-enjoy-a-meal-and-relax-in-our-lounge-2.svg"
                  />
                  <div className={styles.learnMoreGroup}>
                    <img
                      className={styles.learnMoreIcon}
                      alt=""
                      src="/learn-more-2.svg"
                    />
                    <img
                      className={styles.icArrowForward24pxIcon}
                      alt=""
                      src="/ic-arrow-forward-24px-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.learnMore1}>Learn more</div>
          </div>
          <div className={styles.mining}>Mining</div>
        </div>
        <DepartmentContainer civil="Software" />
        <div className={styles.environmantal}>Environmantal</div>
      </div>
    </div>
  );
};

export default CafeInfoDetails;
