import { FunctionComponent } from "react";
import Component7Variant from "./Component7Variant";
import styles from "./FirstSemester.module.css";

export type FirstSemesterType = {
  className?: string;
};

const FirstSemester: FunctionComponent<FirstSemesterType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.firstSemester, className].join(" ")}>
      <div className={styles.firstSemesterContainer}>
        <div className={styles.firstSemesterName}>
          <div className={styles.firstSemesterNameChild} />
          <div className={styles.iSemister}>I Semister</div>
        </div>
        <div className={styles.firstSemesterShape} />
        <div className={styles.courseList}>
          <div className={styles.component7variant2Parent}>
            <Component7Variant />
            <Component7Variant propLeft="597px" propTop="0px" />
            <Component7Variant propLeft="0px" propTop="361px" />
            <Component7Variant propLeft="597px" propTop="361px" />
            <Component7Variant propLeft="0px" propTop="722px" />
            <Component7Variant propLeft="597px" propTop="722px" />
          </div>
        </div>
      </div>
      <div className={styles.learnMoreButton}>
        <a className={styles.learnMore}>Learn more</a>
      </div>
    </div>
  );
};

export default FirstSemester;
