import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent3.module.css";

export type GroupComponent3Type = {
  className?: string;
  collageOfEngineering?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
  collageOfEngineering,
  propWidth,
  propAlignSelf,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <div className={styles.frameChild} />
      <div className={styles.ellipse} />
      <div className={styles.verified}>
        <div className={styles.wrapperShape}>
          <img
            className={styles.shapeIcon}
            loading="lazy"
            alt=""
            src="/2-20.svg"
          />
        </div>
      </div>
      <div className={styles.engineeringDescription}>
        <div className={styles.engineeringTitle}>
          <div className={styles.collageOfEngineering}>
            {collageOfEngineering}
          </div>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        </div>
        <div className={styles.engineeringLink}>
          <a className={styles.learnMore}>Learn more</a>
          <div className={styles.icArrowForward24pxWrapper}>
            <img
              className={styles.icArrowForward24pxIcon}
              loading="lazy"
              alt=""
              src="/ic-arrow-forward-24px.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
