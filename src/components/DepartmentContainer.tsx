import { FunctionComponent } from "react";
import styles from "./DepartmentContainer.module.css";

export type DepartmentContainerType = {
  className?: string;
  civil?: string;
};

const DepartmentContainer: FunctionComponent<DepartmentContainerType> = ({
  className = "",
  civil,
}) => {
  return (
    <div className={[styles.departmentContainer, className].join(" ")}>
      <div className={styles.departmentContainerInner}>
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
      </div>
      <div className={styles.civil}>{civil}</div>
    </div>
  );
};

export default DepartmentContainer;
