import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DropoutContent.module.css";

export type DropoutContentType = {
  className?: string;
  dropOut?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const DropoutContent: FunctionComponent<DropoutContentType> = ({
  className = "",
  dropOut,
  propAlignSelf,
  propWidth,
}) => {
  const dropoutContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.dropoutContent, className].join(" ")}
      style={dropoutContentStyle}
    >
      <div className={styles.wrapper3}>
        <img className={styles.icon} alt="" src="/31.svg" />
      </div>
      <div className={styles.dropoutInfo}>
        <div className={styles.dropoutInfoChild} />
        <div className={styles.dropOutWrapper}>
          <div className={styles.dropOut}>{dropOut}</div>
        </div>
        <div className={styles.dropoutDescription}>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
          <div className={styles.dropoutLearnMore}>
            <div className={styles.dropoutLink}>
              <a className={styles.learnMore}>Learn more</a>
              <div className={styles.icArrowForward24pxWrapper}>
                <img
                  className={styles.icArrowForward24pxIcon}
                  alt=""
                  src="/ic-arrow-forward-24px.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropoutContent;
