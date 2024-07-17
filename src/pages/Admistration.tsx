import { FunctionComponent } from "react";
import InnerDepartment from "../components/InnerDepartment";
import Section from "../components/Section";
import GroupComponent3 from "../components/GroupComponent3";
import RegistrationInfo from "../components/RegistrationInfo";
import DropoutContent from "../components/DropoutContent";
import Copyright from "../components/Copyright";
import styles from "./Admistration.module.css";

const Admistration: FunctionComponent = () => {
  return (
    <div className={styles.admistration}>
      <main className={styles.adminstration}>
        <div className={styles.mdicar} />
        <div className={styles.mdiinternet} />
        <div className={styles.mdiinternet1} />
        <div className={styles.ellipse} />
        <div className={styles.learnMore}>Learn more</div>
        <section className={styles.adminstrationInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <InnerDepartment frameNavWidth="1336px" />
                <Section
                  calculateYour="Begin Your "
                  grade="Journey !!! "
                  propFlex="unset"
                  propAlignSelf="stretch"
                />
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.collegeHeaderParent}>
                  <div className={styles.collegeHeader}>
                    <h2 className={styles.collages}>Collages</h2>
                  </div>
                  <div className={styles.engineeringCollage}>
                    <GroupComponent3 collageOfEngineering="Collage of engineering" />
                    <div className={styles.scienceCollage}>
                      <GroupComponent3
                        collageOfEngineering="Collage of Natural Science"
                        propWidth="unset"
                        propAlignSelf="stretch"
                      />
                    </div>
                    <div className={styles.engineeringInfo}>
                      <div className={styles.wrapperRectangle2Parent}>
                        <div className={styles.wrapperRectangle2}>
                          <img
                            className={styles.wrapperRectangle2Child}
                            alt=""
                            src="/rectangle-2.svg"
                          />
                        </div>
                        <img
                          className={styles.clipboardVerified1}
                          loading="lazy"
                          alt=""
                          src="/clipboard-verified-1@2x.png"
                        />
                        <img
                          className={styles.vectorStrokeIcon}
                          alt=""
                          src="/vector-stroke1.svg"
                        />
                      </div>
                      <div className={styles.textParent}>
                        <b className={styles.text}>
                          <p className={styles.blankLine}>&nbsp;</p>
                        </b>
                        <div className={styles.frameChild} />
                        <div className={styles.ellipse1} />
                        <div className={styles.wrapper220Wrapper}>
                          <div className={styles.wrapper220}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/2-20.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.frameDiv}>
                          <div
                            className={styles.collageOfAppliedEngineeringParent}
                          >
                            <div className={styles.collageOfApplied}>
                              Collage of Applied Engineering
                            </div>
                            <div
                              className={styles.loremIpsumDolor}
                            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
                          </div>
                          <div className={styles.learnMoreParent}>
                            <a className={styles.learnMore1}>Learn more</a>
                            <div className={styles.icArrowForward24pxWrapper}>
                              <img
                                className={styles.icArrowForward24pxIcon}
                                alt=""
                                src="/ic-arrow-forward-24px.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.adminImageWrapper}>
                <div className={styles.adminImage}>
                  <h2 className={styles.administration}>Administration</h2>
                  <img
                    className={styles.imageIcon}
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.registrationInfoParent}>
                <RegistrationInfo registration="Registration" />
                <RegistrationInfo
                  registration="Add and Drop"
                  propWidth="380px"
                  propAlignSelf="unset"
                />
                <div className={styles.frameWrapper2}>
                  <RegistrationInfo
                    registration="Fast Track"
                    propWidth="unset"
                    propAlignSelf="stretch"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.withdrawInfoParent}>
                <div className={styles.withdrawInfo}>
                  <div className={styles.wrapper3}>
                    <img className={styles.icon1} alt="" src="/31.svg" />
                  </div>
                  <div className={styles.withdrawContent}>
                    <div className={styles.withdrawContentChild} />
                    <div className={styles.withdrawDetails}>
                      <div className={styles.withdraw}>{`Withdraw `}</div>
                      <div className={styles.withdrawSummary}>
                        <div
                          className={styles.loremIpsumDolor1}
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
                      </div>
                    </div>
                    <div className={styles.withdrawLinks}>
                      <a className={styles.learnMore2}>Learn more</a>
                      <div className={styles.icArrowForward24pxContainer}>
                        <img
                          className={styles.icArrowForward24pxIcon1}
                          alt=""
                          src="/ic-arrow-forward-24px.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dropoutContentWrapper}>
                  <DropoutContent dropOut="drop out" />
                </div>
                <DropoutContent
                  dropOut="  clearance"
                  propAlignSelf="unset"
                  propWidth="380px"
                />
              </div>
            </div>
          </div>
        </section>
        <Copyright />
        <div className={styles.ellipse2} />
        <div className={styles.learnMore3}>Learn more</div>
        <div className={styles.ellipse3} />
        <div className={styles.learnMore4}>Learn more</div>
        <div className={styles.ellipse4} />
        <div className={styles.learnMore5}>Learn more</div>
        <div className={styles.ellipse5} />
        <div className={styles.learnMore6}>Learn more</div>
        <div className={styles.ellipse6} />
        <div className={styles.learnMore7}>Learn more</div>
        <section className={styles.background}>
          <img
            className={styles.backgroundChild}
            alt=""
            src="/rectangle-6.svg"
          />
        </section>
      </main>
    </div>
  );
};

export default Admistration;
