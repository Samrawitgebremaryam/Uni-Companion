import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component7Variant1.module.css";

export type Component7Variant1Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Component7Variant1: FunctionComponent<Component7Variant1Type> = ({
  className = "",
  propAlignSelf,
  propWidth,
  propMinWidth,
}) => {
  const component7Variant2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propWidth, propMinWidth]);

  return (
    <div
      className={[styles.component7variant2, className].join(" ")}
      style={component7Variant2Style}
    >
      <div className={styles.component7variant2Child} />
      <div className={styles.componentMath}>
        <div className={styles.discreteMath}>Discrete Math</div>
        <div className={styles.componentLorem}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
            tincidunt lectus eget semper. Donec vulputate tincidunt semper. In
            non feugiat ligula. Duis urna qua
          </div>
        </div>
      </div>
      <div className={styles.componentResources}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.grommetIconsresources}
              loading="lazy"
              alt=""
              src="/grommeticonsresources.svg"
            />
            <div className={styles.resourcesWrapper}>
              <div className={styles.resources}>Resources</div>
            </div>
          </div>
          <div className={styles.componentComment}>
            <img
              className={styles.letsIconscommentFill}
              loading="lazy"
              alt=""
              src="/letsiconscommentfill.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component7Variant1;
