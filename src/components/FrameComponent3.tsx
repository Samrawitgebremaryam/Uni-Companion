import { FunctionComponent } from "react";
import Component7Variant1 from "./Component7Variant1";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.semesterContentWrapper, className].join(" ")}>
      <div className={styles.semesterContent}>
        <h2 className={styles.iSemester}>I Semester</h2>
        <div className={styles.componentTitleWrapper}>
          <div className={styles.componentTitle}>
            <div className={styles.componentList}>
              <Component7Variant1 />
              <Component7Variant1
                propAlignSelf="stretch"
                propWidth="unset"
                propMinWidth="unset"
              />
            </div>
            <div className={styles.componentList1}>
              <Component7Variant1
                propAlignSelf="stretch"
                propWidth="unset"
                propMinWidth="unset"
              />
              <Component7Variant1
                propAlignSelf="stretch"
                propWidth="unset"
                propMinWidth="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
