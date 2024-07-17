import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./RegistrationInfo.module.css";

export type RegistrationInfoType = {
  className?: string;
  registration?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const RegistrationInfo: FunctionComponent<RegistrationInfoType> = ({
  className = "",
  registration,
  propWidth,
  propAlignSelf,
}) => {
  const registrationInfoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={[styles.registrationInfo, className].join(" ")}
      style={registrationInfoStyle}
    >
      <div className={styles.wrapperPlaceholder}>
        <img
          className={styles.placeholderIcon}
          loading="lazy"
          alt=""
          src="/31.svg"
        />
      </div>
      <div className={styles.registrationContent}>
        <div className={styles.registrationContentChild} />
        <div className={styles.registrationDetails}>
          <div className={styles.registrationOptions}>
            <div className={styles.registration}>{registration}</div>
          </div>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
        </div>
        <div className={styles.registrationLinks}>
          <div className={styles.learnRegistration}>
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
  );
};

export default RegistrationInfo;
