import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.universitiesParent}>
          <h1 className={styles.universities}>Universities</h1>
          <div className={styles.clipboardVerified1Parent}>
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
        </div>
      </div>
      <div className={styles.universitiesList}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.ellipse} />
          <div className={styles.wrapper220Wrapper}>
            <div className={styles.wrapper220}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/2-20.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.addisAbebaScienceAndTechnoParent}>
              <div className={styles.addisAbebaScienceContainer}>
                <p
                  className={styles.addisAbebaScience}
                >{`Addis abeba Science and `}</p>
                <p className={styles.technologyUniversity}>
                  technology University
                </p>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
            </div>
            <div className={styles.learnMoreParent}>
              <a className={styles.learnMore}>Learn more</a>
              <div className={styles.icArrowForward24pxWrapper}>
                <img
                  className={styles.icArrowForward24pxIcon}
                  loading="lazy"
                  alt=""
                  src="/ic-arrow-forward-24px.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.ellipse1} />
              <div className={styles.wrapper220Container}>
                <div className={styles.wrapper2201}>
                  <img
                    className={styles.icon1}
                    loading="lazy"
                    alt=""
                    src="/2-20.svg"
                  />
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.addisAbebaUniversityParent}>
                  <div className={styles.addisAbebaUniversity}>
                    Addis Abeba University
                  </div>
                  <div
                    className={styles.loremIpsumDolor1}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
                </div>
                <div className={styles.learnMoreGroup}>
                  <a className={styles.learnMore1}>Learn more</a>
                  <div className={styles.icArrowForward24pxContainer}>
                    <img
                      className={styles.icArrowForward24pxIcon1}
                      loading="lazy"
                      alt=""
                      src="/ic-arrow-forward-24px.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.ellipse2} />
            <div className={styles.wrapper220Frame}>
              <div className={styles.wrapper2202}>
                <img
                  className={styles.icon2}
                  loading="lazy"
                  alt=""
                  src="/2-20.svg"
                />
              </div>
            </div>
            <div className={styles.adamaScienceAndTechnologyUParent}>
              <div className={styles.adamaScienceAndContainer}>
                <p className={styles.adamaScienceAnd}>
                  Adama Science and Technology
                </p>
                <p className={styles.university}>University</p>
              </div>
              <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
                <div
                  className={styles.loremIpsumDolor2}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
              </div>
            </div>
            <div className={styles.learnMoreContainer}>
              <a className={styles.learnMore2}>Learn more</a>
              <div className={styles.icArrowForward24pxFrame}>
                <img
                  className={styles.icArrowForward24pxIcon2}
                  loading="lazy"
                  alt=""
                  src="/ic-arrow-forward-24px.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
