import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./Section.module.css";

export type SectionType = {
  className?: string;
  calculateYour?: string;
  grade?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Section: FunctionComponent<SectionType> = ({
  className = "",
  calculateYour,
  grade,
  propFlex,
  propAlignSelf,
}) => {
  const sectionStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div className={[styles.section, className].join(" ")} style={sectionStyle}>
      <div className={styles.calculatorOptions}>
        <div className={styles.calculateYourGradeWrapper}>
          <b className={styles.calculateYourGradeContainer}>
            <span className={styles.calculateYourGradeContainer1}>
              <p className={styles.calculateYour}>{calculateYour}</p>
              <p className={styles.grade}>{grade}</p>
            </span>
          </b>
        </div>
        <div className={styles.doYouWanna}>
          Do you wanna see the acadamic Calander ?
        </div>
      </div>
      <div className={styles.viewCalendarOption}>
        <Button
          className={styles.a}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#4262ff",
            border: "#4262ff solid 1px",
            borderRadius: "40px",
            "&:hover": { background: "#4262ff" },
            height: 40,
          }}
        >
          View acadamic calander
        </Button>
      </div>
    </div>
  );
};

export default Section;
