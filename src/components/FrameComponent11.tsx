import { FunctionComponent } from "react";
import Section from "./Section";
import styles from "./FrameComponent11.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sectionWrapper, className].join(" ")}>
      <Section calculateYour="Calculate Your" grade=" Grade " />
    </div>
  );
};

export default FrameComponent1;
