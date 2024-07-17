import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.introToUniInner, className].join(" ")}>
      <div className={styles.instanceParent}>
        <header className={styles.frameParent}>
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
        </header>
        <div className={styles.section}>
          <div className={styles.beginYourJourneyWrapper}>
            <b className={styles.beginYourJourneyContainer}>
              <span className={styles.beginYourJourneyContainer1}>
                <p className={styles.beginYour}>{`Begin Your `}</p>
                <p className={styles.journey}>{`Journey !!! `}</p>
              </span>
            </b>
          </div>
          <div className={styles.doYouWantContainer}>
            <p
              className={styles.doYouWant}
            >{`Do you want to get general info about `}</p>
            <p className={styles.universityLife}>University life ?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
