import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponentType = {
  className?: string;
  architecture?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  architecture,
  propWidth,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.wrapperRectangle2Parent}>
        <div className={styles.wrapperRectangle2}>
          <img
            className={styles.wrapperRectangle2Child}
            alt=""
            src="/rectangle-2-2.svg"
          />
        </div>
        <div className={styles.ellipse} />
        <div className={styles.emptyContainer}>
          <div className={styles.wrapperEmptyContainer}>
            <img className={styles.emptyContainerIcon} alt="" src="/3-2.svg" />
          </div>
        </div>
        <div className={styles.ourCafInBlock31BehindThParent}>
          <img
            className={styles.ourCafInBlock31BehindTh}
            alt=""
            src="/our-caf-in-block-31-behind-the-library-is-open-for-breakfast-100230-pm-lunch-300430-pm-and-dinner-1100-pm130-am-enjoy-a-meal-and-relax-in-our-lounge-2.svg"
          />
          <div className={styles.cafeInfoLinkContainerParent}>
            <div className={styles.cafeInfoLinkContainer}>
              <img
                className={styles.learnMoreIcon}
                alt=""
                src="/learn-more-2.svg"
              />
            </div>
            <img
              className={styles.icArrowForward24pxIcon}
              alt=""
              src="/ic-arrow-forward-24px-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.departmentNameContainer}>
        <div className={styles.architecture}>{architecture}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
