import { FunctionComponent } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import DiscreteMathResourceTypes from "./DiscreteMathResourceTypes";
import styles from "./FrameComponent6.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.discreteMathParent}>
          <h2 className={styles.discreteMath}>Discrete Math</h2>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.chatParent}>
                <div className={styles.chat} />
                <Accordion
                  className={styles.discreteMathResourceTypes}
                  sx={{ width: 1097 }}
                >
                  <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                    <Typography>{`Books , PDF , PPT `}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography />
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.parent} sx={{ width: 1097 }}>
                  <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                    <Typography>Videos</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography />
                  </AccordionDetails>
                </Accordion>
                <DiscreteMathResourceTypes />
                <DiscreteMathResourceTypes propTop="358px" />
                <h2 className={styles.video}>Video</h2>
              </div>
              <img
                className={styles.discreteMathLearnMoreIcon}
                loading="lazy"
                alt=""
                src="/vector-91.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.learnMoreWrapper}>
          <div className={styles.learnMore}>Learn more</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
