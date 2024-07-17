import { FunctionComponent } from "react";
import ContentContainer from "../components/ContentContainer";
import CafeInfoDetails2 from "../components/CafeInfoDetails2";
import CafeInfoDetails1 from "../components/CafeInfoDetails1";
import CafeInfoDetails from "../components/CafeInfoDetails";
import GroupComponent from "../components/GroupComponent";
import styles from "./Department.module.css";

const Department: FunctionComponent = () => {
  return (
    <div className={styles.department1}>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <div className={styles.learnMore}>Learn more</div>
      <div className={styles.learnMore1}>Learn more</div>
      <main className={styles.container}>
        <section className={styles.cafeInfo}>
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
            <nav className={styles.navigationContainer}>
              <nav className={styles.navigationMenu}>
                <a className={styles.aboutUni}>About Uni</a>
                <a className={styles.departments}>Departments</a>
                <a className={styles.gradingSystem}>Grading System</a>
                <a className={styles.administration}>Administration</a>
              </nav>
            </nav>
          </header>
          <div className={styles.pageHeader}>
            <div className={styles.headerContent}>
              <h1 className={styles.department}>Department</h1>
              <h2 className={styles.addisAbabaScience}>
                Addis Ababa Science and Technology University(AASTU) provides
                three major programs. The undergraduate program, Postgraduate
                program and the Extension program. Through The undergraduate
                program, it provides two major departments, which are the
                Engineering and Applied Science. The Engineering Department
                comprises of over 9 different disciplines, where as the Applied
                Science Department have over 4 different disciplines. The post
                graduate program can be through FastTrack or the regular one.
                The extension program is a program for social students, main
                class dates are Saturday and Sunday.
              </h2>
            </div>
          </div>
          <ContentContainer />
          <CafeInfoDetails2 />
          <CafeInfoDetails1 />
          <CafeInfoDetails />
        </section>
      </main>
      <GroupComponent />
    </div>
  );
};

export default Department;
