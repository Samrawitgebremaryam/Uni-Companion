import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent5.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.softwareInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <FrameComponent1 />
        <div className={styles.content}>
          <div className={styles.softwareInfo}>
            <div className={styles.softwareHeader}>
              <h1 className={styles.softwareDepartment}>Software Department</h1>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
              tincidunt lectus eget semper. Donec vulputate tincidunt semper. In
              non feugiat ligula. Duis urna quam, varius in pretium et, accumsan
              et elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In porta tincidunt lectus eget semper. Donec vulputate tincidunt
              semper. In non feugiat ligula. Duis urna quam, varius in pretium
              et, accumsan et elit.
            </div>
          </div>
          <div className={styles.softwareImage}>
            <div className={styles.illustrationContainer}>
              <img
                className={styles.softwareIllustrationIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className={styles.illustrationContainerChild}
                alt=""
                src="/group-443.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
