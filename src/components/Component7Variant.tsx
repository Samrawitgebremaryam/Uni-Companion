import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component7Variant.module.css";

export type Component7VariantType = {
  className?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const Component7Variant: FunctionComponent<Component7VariantType> = ({
  className = "",
  propLeft,
  propTop,
}) => {
  const component7Variant21Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={[styles.component7variant2, className].join(" ")}
      style={component7Variant21Style}
    >
      <div className={styles.variantShapes} />
      <div className={styles.discreteMathParent}>
        <div className={styles.discreteMath}>Discrete Math</div>
        <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
            tincidunt lectus eget semper. Donec vulputate tincidunt semper. In
            non feugiat ligula. Duis urna qua
          </div>
        </div>
      </div>
      <div className={styles.component7variant2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.resourceIconShapesParent}>
            <div className={styles.resourceIconShapes} />
            <img
              className={styles.grommetIconsresources}
              alt=""
              src="/grommeticonsresources.svg"
            />
            <div className={styles.resourcesWrapper}>
              <div className={styles.resources}>Resources</div>
            </div>
          </div>
          <div className={styles.letsIconscommentFillWrapper}>
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

export default Component7Variant;
