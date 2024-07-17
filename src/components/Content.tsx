import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.answerDecoration}>
        <div className={styles.wrapperRectangle7}>
          <img
            className={styles.wrapperRectangle7Child}
            alt=""
            src="/rectangle-7.svg"
          />
        </div>
        <img
          className={styles.simpleIconsbuildkite}
          loading="lazy"
          alt=""
          src="/simpleiconsbuildkite.svg"
        />
        <img
          className={styles.wpfdefineLocationIcon}
          loading="lazy"
          alt=""
          src="/wpfdefinelocation.svg"
        />
        <img
          className={styles.phstrategyBoldIcon}
          loading="lazy"
          alt=""
          src="/phstrategybold.svg"
        />
      </div>
      <div className={styles.uniCompanion}>UNI COMPANION</div>
      <div className={styles.navigation}>
        <div className={styles.content1}>
          <img
            className={styles.image5Icon}
            loading="lazy"
            alt=""
            src="/image-51@2x.png"
          />
          <div className={styles.links}>
            <div className={styles.linkList}>
              <div className={styles.linkItems}>
                <a className={styles.home}>Home</a>
              </div>
              <div className={styles.linkItems1}>
                <a className={styles.features}>Features</a>
              </div>
              <div className={styles.linkItems2}>
                <div
                  className={styles.whyUniCompanion}
                >{`Why Uni Companion `}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.information}>Information</div>
              </div>
              <div className={styles.linkItems3}>
                <div className={styles.aboutUs}>About Us</div>
              </div>
              <Button
                className={styles.linkListChild}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "20",
                  background: "#fff",
                  border: "#565758 solid 1px",
                  borderRadius: "27px",
                  "&:hover": { background: "#fff" },
                  width: 152,
                  height: 50,
                }}
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.hero}>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>
              <div className={styles.successContainer}>
                <h1 className={styles.aSmarterWayContainer}>
                  <span>{`A smarter way to navigate and excel in `}</span>
                  <span className={styles.yourAcademicFuture}>
                    your academic future.
                  </span>
                </h1>
                <div className={styles.button}>
                  <div className={styles.appButton}>
                    <button className={styles.getTheAppParent}>
                      <div className={styles.getTheApp}>Get the app</div>
                      <div className={styles.playStore}>
                        <img
                          className={styles.playStoreChild}
                          alt=""
                          src="/rectangle-4.svg"
                        />
                        <img
                          className={styles.simpleIconsgoogleplay}
                          alt=""
                          src="/simpleiconsgoogleplay.svg"
                        />
                      </div>
                    </button>
                    <Button
                      className={styles.appButtonChild}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "20",
                        background: "#3652dd",
                        border: "#fff solid 3px",
                        borderRadius: "15px",
                        "&:hover": { background: "#3652dd" },
                        width: 151,
                        height: 56,
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.topSeparator}>
                <div className={styles.group1}>
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group-1.svg"
                  />
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="/group-2.svg"
                  />
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="/group-3.svg"
                  />
                  <img
                    className={styles.groupIcon4}
                    alt=""
                    src="/group-4.svg"
                  />
                  <img
                    className={styles.groupIcon5}
                    alt=""
                    src="/group-5.svg"
                  />
                  <img
                    className={styles.groupIcon6}
                    alt=""
                    src="/group-6.svg"
                  />
                  <img
                    className={styles.groupIcon7}
                    loading="lazy"
                    alt=""
                    src="/group-7.svg"
                  />
                  <img
                    className={styles.groupIcon8}
                    alt=""
                    src="/group-8.svg"
                  />
                  <img
                    className={styles.groupIcon9}
                    alt=""
                    src="/group-9.svg"
                  />
                  <img
                    className={styles.groupIcon10}
                    alt=""
                    src="/group-10.svg"
                  />
                  <img
                    className={styles.groupIcon11}
                    alt=""
                    src="/group-11.svg"
                  />
                  <img
                    className={styles.groupIcon12}
                    alt=""
                    src="/group-12.svg"
                  />
                  <img
                    className={styles.groupIcon13}
                    alt=""
                    src="/group-13.svg"
                  />
                  <img
                    className={styles.groupIcon14}
                    alt=""
                    src="/group-14.svg"
                  />
                  <img
                    className={styles.groupIcon15}
                    alt=""
                    src="/group-15.svg"
                  />
                  <img
                    className={styles.groupIcon16}
                    alt=""
                    src="/group-16.svg"
                  />
                  <img
                    className={styles.groupIcon17}
                    alt=""
                    src="/group-17.svg"
                  />
                  <img
                    className={styles.groupIcon18}
                    alt=""
                    src="/group-18.svg"
                  />
                  <img
                    className={styles.groupIcon19}
                    loading="lazy"
                    alt=""
                    src="/group-19.svg"
                  />
                  <img
                    className={styles.groupIcon20}
                    alt=""
                    src="/group-20.svg"
                  />
                </div>
                <img
                  className={styles.groupIcon21}
                  loading="lazy"
                  alt=""
                  src="/group-21.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
