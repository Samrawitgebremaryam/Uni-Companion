import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import styles from "./Structure2.module.css";

export type Structure2Type = {
  className?: string;
};

const Structure2: FunctionComponent<Structure2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.structure, className].join(" ")}>
      <div className={styles.structure1}>
        <FrameComponent3 frameDivPadding="unset" />
        <FrameComponent2 />
      </div>
    </section>
  );
};

export default Structure2;
