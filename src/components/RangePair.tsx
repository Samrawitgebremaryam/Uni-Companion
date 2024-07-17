import { FunctionComponent } from "react";
import styles from "./RangePair.module.css";

export type RangePairType = {
  className?: string;
  rectangle2?: string;
  b?: string;
  spacerB?: string;
  b1?: string;
  spacerF?: string;
};

const RangePair: FunctionComponent<RangePairType> = ({
  className = "",
  rectangle2,
  b,
  spacerB,
  b1,
  spacerF,
}) => {
  return (
    <div className={[styles.rangePair, className].join(" ")}>
      <div className={styles.rangeElements}>
        <div className={styles.wrapperRectangle2}>
          <img
            className={styles.wrapperRectangle2Child}
            alt=""
            src={rectangle2}
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.labelContainerB}>
            <h1 className={styles.b}>{b}</h1>
          </div>
          <div className={styles.spacerB}>{spacerB}</div>
        </div>
      </div>
      <div className={styles.mdicarParent}>
        <div className={styles.mdicar} />
        <div className={styles.frameItem} />
        <div className={styles.labelContainerF}>
          <h1 className={styles.b1}>{b1}</h1>
        </div>
        <div className={styles.spacerF}>{spacerF}</div>
      </div>
    </div>
  );
};

export default RangePair;
