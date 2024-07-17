import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./CafeInfoDetails1.module.css";

export type CafeInfoDetails1Type = {
  className?: string;
};

const CafeInfoDetails1: FunctionComponent<CafeInfoDetails1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.cafeInfoDetails, className].join(" ")}>
      <div className={styles.component6variant2}>
        <FrameComponent
          architecture="Electrical"
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
          <div className={styles.electromechanical}>Electromechanical</div>
        </div>
        <div className={styles.component6variant2Inner}>
          <div className={styles.frameContainer}>
            <div className={styles.wrapperRectangle2Group}>
              <div className={styles.wrapperRectangle21}>
                <img
                  className={styles.wrapperRectangle2Item}
                  alt=""
                  src="/rectangle-2-2.svg"
                />
              </div>
              <div className={styles.ellipse1} />
              <div className={styles.wrapperEmptyContainer1}>
                <img
                  className={styles.emptyContainerIcon1}
                  alt=""
                  src="/3-2.svg"
                />
              </div>
              <div className={styles.ourCafInBlock31BehindThGroup}>
                <img
                  className={styles.ourCafInBlock31BehindTh1}
                  alt=""
                  src="/our-caf-in-block-31-behind-the-library-is-open-for-breakfast-100230-pm-lunch-300430-pm-and-dinner-1100-pm130-am-enjoy-a-meal-and-relax-in-our-lounge-2.svg"
                />
                <div className={styles.learnMoreContainer}>
                  <img
                    className={styles.learnMoreIcon1}
                    alt=""
                    src="/learn-more-2.svg"
                  />
                  <img
                    className={styles.icArrowForward24pxIcon1}
                    alt=""
                    src="/ic-arrow-forward-24px-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeInfoDetails1;
