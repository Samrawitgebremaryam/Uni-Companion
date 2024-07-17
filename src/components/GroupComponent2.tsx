import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  className?: string;
  b?: string;
  spacer?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
  b,
  spacer,
  propBackgroundColor,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.labelContainer}>
        <h1 className={styles.b}>{b}</h1>
      </div>
      <div className={styles.spacer}>{spacer}</div>
    </div>
  );
};

export default GroupComponent2;
