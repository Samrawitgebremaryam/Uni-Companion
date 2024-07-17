import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent31.module.css";

export type FrameComponent3Type = {
  className?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  frameDivPadding,
}) => {
  const frameHeader1Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <header
      className={[styles.software4Inner, className].join(" ")}
      style={frameHeader1Style}
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
        <nav className={styles.frameWrapper}>
          <nav className={styles.aboutUniParent}>
            <a className={styles.aboutUni}>About Uni</a>
            <a className={styles.departments}>Departments</a>
            <a className={styles.gradingSystem}>Grading System</a>
            <a className={styles.administration}>Administration</a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default FrameComponent3;
