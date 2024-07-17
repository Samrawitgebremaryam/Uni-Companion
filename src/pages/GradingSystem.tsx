import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import InnerDepartment from "../components/InnerDepartment";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import RangePair from "../components/RangePair";
import Copyright from "../components/Copyright";
import styles from "./GradingSystem.module.css";

const GradingSystem: FunctionComponent = () => {
  return (
    <div className={styles.gradingSystem}>
      <div className={styles.mdiinternet} />
      <div className={styles.mdiinternet1} />
      <div className={styles.learnMore}>Learn more</div>
      <main className={styles.main}>
        <section className={styles.innerDepartmentParent}>
          <InnerDepartment />
          <FrameComponent1 />
          <div className={styles.gradeContentWrapper}>
            <div className={styles.gradeContent}>
              <div className={styles.gradeSubRangeParent}>
                <div className={styles.gradeSubRange}>
                  <div className={styles.gradeLabels}>
                    <div className={styles.gradeIconParent}>
                      <div className={styles.gradeIcon}>
                        <div className={styles.iconContainer}>
                          <div className={styles.wrapperIcon}>
                            <img
                              className={styles.icon}
                              loading="lazy"
                              alt=""
                              src="/icon1.svg"
                            />
                          </div>
                          <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <h1 className={styles.a}>A+</h1>
                            <div className={styles.labelSpacer}>100 - 90</div>
                          </div>
                        </div>
                      </div>
                      <GroupComponent2 b="B+" spacer="80 - 75" />
                      <GroupComponent2
                        b="C+"
                        spacer="60 - 55"
                        propBackgroundColor="#f6c0c0"
                      />
                    </div>
                  </div>
                  <div className={styles.detailedRange}>
                    <div className={styles.rangeTitle}>
                      <h1
                        className={styles.gradingRange}
                      >{`Grading Range `}</h1>
                    </div>
                    <div className={styles.gradeRangeA}>
                      <div className={styles.rangeElementsA}>
                        <div className={styles.rangeContentA}>
                          <div className={styles.wrapperRectangle2}>
                            <img
                              className={styles.wrapperRectangle2Child}
                              alt=""
                              src="/rectangle-2.svg"
                            />
                          </div>
                          <div className={styles.rectangleGroup}>
                            <div className={styles.frameItem} />
                            <div className={styles.labelContainerA}>
                              <h1 className={styles.a1}>A</h1>
                            </div>
                            <div className={styles.spacerA}>90 - 85</div>
                          </div>
                        </div>
                        <div className={styles.mdicarParent}>
                          <div className={styles.mdicar} />
                          <div className={styles.frameInner} />
                          <div className={styles.aWrapper}>
                            <h1 className={styles.a2}>A-</h1>
                          </div>
                          <div className={styles.div}>85 - 80</div>
                        </div>
                      </div>
                    </div>
                    <RangePair
                      rectangle2="/rectangle-2-1.svg"
                      b="B"
                      spacerB="75 - 65"
                      b1="B-"
                      spacerF="65 - 60"
                    />
                    <RangePair
                      rectangle2="/rectangle-2-21.svg"
                      b="C"
                      spacerB="55 - 45"
                      b1="F"
                      spacerF={`< 45`}
                    />
                  </div>
                </div>
                <div className={styles.calculatorForm}>
                  <div className={styles.div1}>
                    <div className={styles.titleContentParent}>
                      <div className={styles.titleContent}>
                        <h1
                          className={styles.calculateYourGrade}
                        >{`Calculate Your Grade `}</h1>
                        <img
                          className={styles.alarmClockCopy2}
                          loading="lazy"
                          alt=""
                          src="/alarm-clock-copy-2@2x.png"
                        />
                        <img
                          className={styles.clipboardVerified1}
                          loading="lazy"
                          alt=""
                          src="/clipboard-verified-11@2x.png"
                        />
                        <img
                          className={styles.vectorStrokeIcon}
                          alt=""
                          src="/vector-stroke1.svg"
                        />
                      </div>
                      <h1
                        className={styles.calculateYourGrade1}
                      >{`Calculate Your Grade `}</h1>
                    </div>
                    <div className={styles.inputFields}>
                      <div className={styles.fieldContainer}>
                        <div className={styles.creditField}>
                          <div className={styles.creditInput}>
                            <img
                              className={styles.creditInputChild}
                              alt=""
                              src="/rectangle-17890.svg"
                            />
                            <div className={styles.creditHour}>credit hour</div>
                          </div>
                          <div className={styles.gradeField}>
                            <div className={styles.gradeInput}>
                              <img
                                className={styles.gradeInputChild}
                                alt=""
                                src="/rectangle-17891.svg"
                              />
                              <div className={styles.grade}>Grade</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.divider}>
                          <img
                            className={styles.dividerChild}
                            loading="lazy"
                            alt=""
                            src="/rectangle-17892.svg"
                          />
                          <img
                            className={styles.dividerItem}
                            loading="lazy"
                            alt=""
                            src="/rectangle-17891.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.dividerB}>
                      <div className={styles.dividerContainerB}>
                        <div className={styles.vectorParent}>
                          <img
                            className={styles.rectangleIcon}
                            loading="lazy"
                            alt=""
                            src="/rectangle-17892.svg"
                          />
                          <img
                            className={styles.frameChild1}
                            loading="lazy"
                            alt=""
                            src="/rectangle-17890.svg"
                          />
                        </div>
                        <div className={styles.vectorGroup}>
                          <img
                            className={styles.frameChild2}
                            loading="lazy"
                            alt=""
                            src="/rectangle-17891.svg"
                          />
                          <img
                            className={styles.frameChild3}
                            loading="lazy"
                            alt=""
                            src="/rectangle-17891.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.dividerD}>
                      <div className={styles.dividerContainerD}>
                        <div className={styles.dividerContainerDInner}>
                          <img
                            className={styles.frameChild4}
                            loading="lazy"
                            alt=""
                            src="/rectangle-17890.svg"
                          />
                        </div>
                        <img
                          className={styles.dividerContainerDChild}
                          loading="lazy"
                          alt=""
                          src="/rectangle-17891.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.dividerContainerE}>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.frameChild5}
                          loading="lazy"
                          alt=""
                          src="/rectangle-17890.svg"
                        />
                        <img
                          className={styles.frameChild6}
                          alt=""
                          src="/rectangle-17891.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.divWrapper}>
                      <div className={styles.div2}>
                        <Button
                          className={styles.a3}
                          endIcon={
                            <img
                              width="20px"
                              height="14px"
                              src="/spanafter.svg"
                            />
                          }
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontSize: "19",
                            background: "#3d55d7",
                            borderRadius: "42px",
                            "&:hover": { background: "#3d55d7" },
                          }}
                        >
                          {" "}
                          Calculate
                        </Button>
                        <Button
                          className={styles.a4}
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "rgba(2, 3, 59, 0.5)",
                            fontSize: "19",
                            background: "rgba(255, 255, 255, 0)",
                            borderRadius: "42px",
                            "&:hover": { background: "rgba(255, 255, 255, 0)" },
                            width: 105.6,
                            height: 54.5,
                          }}
                        >
                          Result
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.footerWrapper}>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.iconusers}
                      loading="lazy"
                      alt=""
                      src="/iconusers.svg"
                    />
                  </div>
                  <div className={styles.userAvatar}>
                    <div className={styles.avatarIcon}>
                      <div className={styles.iconusers1} />
                    </div>
                    <div className={styles.roundedRectangle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.learnMore1}>Learn more</div>
      <div className={styles.learnMore2}>Learn more</div>
      <div className={styles.learnMore3}>Learn more</div>
      <Copyright />
      <div className={styles.footerBackground}>
        <img
          className={styles.footerBackgroundChild}
          alt=""
          src="/rectangle-6.svg"
        />
      </div>
    </div>
  );
};

export default GradingSystem;
