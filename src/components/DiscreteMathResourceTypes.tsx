import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import styles from "./DiscreteMathResourceTypes.module.css";

export type DiscreteMathResourceTypesType = {
  className?: string;
  exam?: string;
  vector?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const DiscreteMathResourceTypes: FunctionComponent<
  DiscreteMathResourceTypesType
> = ({ className = "", exam, vector, propTop }) => {
  const discreteMathResourceTypesStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <Accordion
      className={[styles.discreteMathResourceTypes, className].join(" ")}
      sx={{ width: 1097 }}
      style={discreteMathResourceTypesStyle}
    >
      <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
        <Typography>{`Exams `}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography />
      </AccordionDetails>
    </Accordion>
  );
};

export default DiscreteMathResourceTypes;
