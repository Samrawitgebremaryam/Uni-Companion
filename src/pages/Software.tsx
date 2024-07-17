import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import YearList from "../components/YearList";
import FirstSemester from "../components/FirstSemester";
import GroupComponent from "../components/GroupComponent";
import styles from "./Software.module.css";

const Software: FunctionComponent = () => {
  return (
    <div className={styles.software}>
      <div className={styles.learnMore}>Learn more</div>
      <FrameComponent />
      <div className={styles.wrapperRectangle2}>
        <img
          className={styles.wrapperRectangle2Child}
          alt=""
          src="/rectangle-2.svg"
        />
      </div>
      <section className={styles.yearStructure}>
        <YearList />
        <FirstSemester />
      </section>
      <b className={styles.iSemester}>I Semester</b>
      <GroupComponent />
    </div>
  );
};

export default Software;
