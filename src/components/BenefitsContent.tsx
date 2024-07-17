import { FunctionComponent } from "react";
import styles from "./BenefitsContent.module.css";

export type BenefitsContentType = {
  className?: string;
};

const BenefitsContent: FunctionComponent<BenefitsContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.benefitsContent, className].join(" ")}>
      <div className={styles.benefitsContentChild} />
      <div className={styles.whyWrapper}>
        <div className={styles.why}>
          <h2 className={styles.whyUniCompanion}>Why Uni Companion</h2>
          <img
            className={styles.vectorStrokeIcon}
            loading="lazy"
            alt=""
            src="/vector-stroke-1.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.reasonsListWrapper}>
          <div className={styles.reasonsList}>
            <div className={styles.reasonContentWrapper}>
              <div className={styles.reasonContent}>
                <div className={styles.reasonIllustration}>
                  <img
                    className={styles.toDoListIcon}
                    loading="lazy"
                    alt=""
                    src="/todo-list.svg"
                  />
                </div>
                <div className={styles.app}>
                  <img
                    className={styles.appChild}
                    loading="lazy"
                    alt=""
                    src="/group-181.svg"
                  />
                </div>
                <img
                  className={styles.successIcon}
                  loading="lazy"
                  alt=""
                  src="/success.svg"
                />
              </div>
            </div>
            <div className={styles.reasonDetails}>
              <div className={styles.empoweredLearningWrapper}>
                <div className={styles.empoweredLearning}>
                  Empowered Learning
                </div>
              </div>
              <div className={styles.connectedCommunityWrapper}>
                <div className={styles.connectedCommunity}>
                  Connected Community
                </div>
              </div>
              <div className={styles.strategicSupport}>Strategic Support</div>
            </div>
          </div>
        </div>
        <div className={styles.companionDescription}>
          <div className={styles.uniCompanionEquipsStudentsWrapper}>
            <div className={styles.uniCompanionEquips}>
              Uni Companion equips students with advanced AI quizzes and a vast
              academic database, transforming study habits and fostering
              superior understanding and achievement.
            </div>
          </div>
          <div className={styles.weCreateSeamlessConnectionsWrapper}>
            <div className={styles.weCreateSeamless}>
              We create seamless connections between students and mentors,
              building a supportive academic network that enhances learning
              through direct, personalized mentorship.
            </div>
          </div>
          <div className={styles.focusedOnMaximizing}>
            Focused on maximizing efficiency and discipline, Uni Companion
            enhances productivity with targeted tools like Focus Mode and habit
            tracking, guiding students towards achieving their educational goals
            with precision and control.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsContent;
