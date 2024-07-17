import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent13.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.software4Inner, className].join(" ")}>
      <FrameComponent2 />
    </section>
  );
};

export default FrameComponent1;
