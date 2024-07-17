import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InnerDepartment.module.css";

export type InnerDepartmentType = {
  className?: string;

  /** Style props */
  frameNavWidth?: CSSProperties["width"];
};

const InnerDepartment: FunctionComponent<InnerDepartmentType> = ({
  className = "",
  frameNavWidth,
}) => {
  const innerDepartmentStyle: CSSProperties = useMemo(() => {
    return {
      width: frameNavWidth,
    };
  }, [frameNavWidth]);

  return (
    <header
      className={[styles.innerDepartment, className].join(" ")}
      style={innerDepartmentStyle}
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

export default InnerDepartment;
