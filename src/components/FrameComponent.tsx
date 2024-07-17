import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.testimonialContainerWrapper, className].join(" ")}
    >
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialContent}>
          <img
            className={styles.testimonialContentChild}
            loading="lazy"
            alt=""
            src="/rectangle-11@2x.png"
          />
          <div className={styles.testimonial}>
            <div className={styles.testimonialChild} />
            <div className={styles.description}>
              <img
                className={styles.locationPinIcon}
                loading="lazy"
                alt=""
                src="/rectangle-8@2x.png"
              />
              <img
                className={styles.namePinIcon}
                loading="lazy"
                alt=""
                src="/rectangle-9@2x.png"
              />
              <img
                className={styles.addressPinIcon}
                loading="lazy"
                alt=""
                src="/rectangle-10@2x.png"
              />
            </div>
            <div className={styles.todoListIllustration}>
              <div className={styles.button}>
                <div className={styles.thirdFeature}>
                  <div className={styles.locationPlaceholder}>
                    +251-947899528
                  </div>
                </div>
                <div className={styles.authorLocationContainer}>
                  <div className={styles.nebiyoueliasa2svorgWrapper}>
                    <div className={styles.nebiyoueliasa2svorg}>
                      nebiyou.elias@a2sv.org
                    </div>
                  </div>
                  <div className={styles.addisAbeba}>
                    Addis Abeba , Ethiopia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.successIllustrationParent}>
          <div className={styles.successIllustration}>
            <h1 className={styles.getInTouch}>Get in Touch</h1>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.anyQuestionOrRemarksLetUWrapper}>
              <div className={styles.anyQuestionOr}>
                Any question or remarks? Let us know!
              </div>
            </div>
            <div className={styles.nameInput}>
              <div className={styles.benefitIllustration}>
                <TextField
                  className={styles.benefitIllustrationChild}
                  placeholder="Enter your name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#000" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                    width: "344px",
                  }}
                />
              </div>
              <div className={styles.emailInput}>
                <div className={styles.emailContainer}>
                  <div className={styles.empoweredTitle}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.enterYourEmail}>
                        Enter your email
                      </div>
                    </div>
                  </div>
                  <textarea
                    className={styles.emailContainerChild}
                    placeholder="Type your message here"
                    rows={9}
                    cols={31}
                  />
                </div>
                <div className={styles.communityTitle}>
                  <Button
                    className={styles.communityTitleChild}
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "24",
                      background: "#3652dd",
                      borderRadius: "20px",
                      "&:hover": { background: "#3652dd" },
                      width: 158,
                      height: 56,
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
