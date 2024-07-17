import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import styles from "./ContentContainer.module.css";

export type ContentContainerType = {
  className?: string;
};

const ContentContainer: FunctionComponent<ContentContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contentContainer, className].join(" ")}>
      <div className={styles.pageContent}>
        <div className={styles.commonCoursesWrapper}>
          <h1 className={styles.commonCourses}>{`Common Courses `}</h1>
        </div>
        <div className={styles.featuredContainer}>
          <GroupComponent1 freshman="Freshman" />
          <GroupComponent1 freshman="Pre-engineering" />
        </div>
        <div className={styles.departmentsWrapper}>
          <h1 className={styles.departments}>Departments</h1>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
