import { FunctionComponent } from "react";
import styles from "./FrameComponent22.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.softwareDepartmentWrapper}>
          <h1 className={styles.softwareDepartment}>Software Department</h1>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
          tincidunt lectus eget semper. Donec vulputate tincidunt semper. In non
          feugiat ligula. Duis urna quam, varius in pretium et, accumsan et
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          porta tincidunt lectus eget semper. Donec vulputate tincidunt semper.
          In non feugiat ligula. Duis urna quam, varius in pretium et, accumsan
          et elit.
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <img className={styles.frameChild} alt="" src="/group-444.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
