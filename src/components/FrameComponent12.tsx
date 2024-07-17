import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent12.module.css";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  uNICOMPANIONAlignSelf?: CSSProperties["alignSelf"];
  uNICOMPANIONWidth?: CSSProperties["width"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  uNICOMPANIONAlignSelf,
  uNICOMPANIONWidth,
}) => {
  const frameHeaderStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: uNICOMPANIONAlignSelf,
      width: uNICOMPANIONWidth,
    };
  }, [uNICOMPANIONAlignSelf, uNICOMPANIONWidth]);

  return (
    <header
      className={[styles.instanceWrapper, className].join(" ")}
      style={frameHeaderStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.image5Parent}>
          <img
            className={styles.image5Icon}
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
          <a className={styles.uniCompanion}>UNI COMPANION</a>
        </div>
        <nav className={styles.aboutContainer}>
          <nav className={styles.aboutUni}>
            <a className={styles.aboutUni1}>About Uni</a>
            <a className={styles.departments}>Departments</a>
            <a className={styles.gradingSystem}>Grading System</a>
            <a className={styles.administration}>Administration</a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default FrameComponent1;
