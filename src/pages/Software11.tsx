import { FunctionComponent } from "react";
import Structure2 from "../components/Structure2";
import Structure1 from "../components/Structure1";
import Structure from "../components/Structure";
import GroupComponent from "../components/GroupComponent";
import styles from "./Software11.module.css";

const Software1: FunctionComponent = () => {
  return (
    <div className={styles.software5}>
      <Structure2 />
      <div className={styles.wrapperRectangle2}>
        <img
          className={styles.wrapperRectangle2Child}
          alt=""
          src="/rectangle-2.svg"
        />
      </div>
      <Structure1 />
      <Structure />
      <h2 className={styles.booksPdfPpt}>Books, Pdf, Ppt</h2>
      <h2 className={styles.exam}>Exam</h2>
      <img
        className={styles.shapeIcon}
        loading="lazy"
        alt=""
        src="/vector-92.svg"
      />
      <GroupComponent />
    </div>
  );
};

export default Software1;
