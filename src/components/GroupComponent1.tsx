import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  freshman?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  freshman,
}) => {
  return (
    <div className={[styles.ellipseParent, className].join(" ")}>
      <div className={styles.ellipse} />
      <div className={styles.featuredDetails}>
        <div className={styles.wrapperEmptyContainer}>
          <img
            className={styles.emptyContainerIcon}
            loading="lazy"
            alt=""
            src="/3.svg"
          />
        </div>
        <div className={styles.featuredInfo}>
          <div className={styles.wrapperRectangle2}>
            <img
              className={styles.wrapperRectangle2Child}
              alt=""
              src="/rectangle-22.svg"
            />
          </div>
          <img
            className={styles.ourCafInBlock31BehindTh}
            loading="lazy"
            alt=""
            src="/our-caf-in-block-31-behind-the-library-is-open-for-breakfast-100230-pm-lunch-300430-pm-and-dinner-1100-pm130-am-enjoy-a-meal-and-relax-in-our-lounge.svg"
          />
          <img className={styles.learnMoreIcon} alt="" src="/learn-more.svg" />
          <img
            className={styles.icArrowForward24pxIcon}
            alt=""
            src="/ic-arrow-forward-24px1.svg"
          />
          <div className={styles.freshman}>{freshman}</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
