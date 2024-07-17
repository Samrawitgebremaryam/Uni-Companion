import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import DepartmentContainer from "./DepartmentContainer";
import styles from "./CafeInfoDetails2.module.css";

export type CafeInfoDetails2Type = {
  className?: string;
};

const CafeInfoDetails2: FunctionComponent<CafeInfoDetails2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.cafeInfoDetails, className].join(" ")}>
      <div className={styles.component6default}>
        <FrameComponent architecture="Architecture " />
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
              <div className={styles.wrapperEmptyContainer}>
                <img
                  className={styles.emptyContainerIcon}
                  alt=""
                  src="/3-2.svg"
                />
              </div>
              <div className={styles.ourCafInBlock31BehindThParent}>
                <img
                  className={styles.ourCafInBlock31BehindTh}
                  alt=""
                  src="/our-caf-in-block-31-behind-the-library-is-open-for-breakfast-100230-pm-lunch-300430-pm-and-dinner-1100-pm130-am-enjoy-a-meal-and-relax-in-our-lounge-2.svg"
                />
                <div className={styles.learnMoreParent}>
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
          <div className={styles.learnMore}>Learn more</div>
          <div className={styles.chemical}>{`Chemical `}</div>
        </div>
        <div className={styles.learnMoreContainer}>
          <a className={styles.learnMore1}>Learn more</a>
        </div>
        <DepartmentContainer civil="Civil" />
      </div>
    </div>
  );
};

export default CafeInfoDetails2;
