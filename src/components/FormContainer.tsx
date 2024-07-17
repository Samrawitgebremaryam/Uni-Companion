import { FunctionComponent } from "react";
import styles from "./FormContainer.module.css";

export type FormContainerType = {
  className?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.formContainer, className].join(" ")}>
      <div className={styles.linkItems}>
        <div className={styles.emailMessageContainer}>
          <div className={styles.academicPreparednessAiPowerContainer}>
            <p className={styles.academicPreparedness}>Academic Preparedness</p>
            <p className={styles.aiPoweredQuizApp}>AI-Powered Quiz App</p>
          </div>
          <div className={styles.maximizeYourLearningContainer}>
            <p
              className={styles.maximizeYourLearning}
            >{`Maximize your learning with our advanced AI-powered quiz app, which utilizes Active Recall techniques to improve long-term memory retention. `}</p>
            <p className={styles.theStrikeBasedFeature}>
              The Strike-Based feature intelligently identifies and targets your
              weaker areas, providing tailored quizzes to ensure comprehensive
              mastery of topics. This strategic approach not only prepares you
              for exams but also solidifies your overall knowledge base.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.googlePlay}>
          <img
            className={styles.accessibilityImageIcon}
            alt=""
            src="/accessibility-image@2x.png"
          />
          <img
            className={styles.zigzag36Icon}
            loading="lazy"
            alt=""
            src="/zigzag-36.svg"
          />
        </div>
        <div className={styles.linkItems1}>
          <div className={styles.accessibilityInfo}>
            <div className={styles.enhancedAccessibilityCentralContainer}>
              <p className={styles.enhancedAccessibility}>
                Enhanced Accessibility
              </p>
              <p className={styles.centralizedInformationHub}>
                Centralized Information Hub
              </p>
            </div>
            <div className={styles.streamlineYourAcademic}>
              Streamline your academic journey with our centralized information
              hub. This feature brings together all essential university
              details— from course outlines and schedules to faculty contacts
              and event updates. With everything accessible in one place,
              managing your academic commitments becomes more straightforward,
              ensuring you never miss out on important information or
              opportunities.
            </div>
          </div>
          <div className={styles.accessibility}>
            <img
              className={styles.vectorStrokeIcon}
              loading="lazy"
              alt=""
              src="/vector-stroke.svg"
            />
            <div className={styles.bottomZigzagContainer}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle@2x.png"
              />
              <img
                className={styles.zigzag36Icon1}
                loading="lazy"
                alt=""
                src="/zigzag-36-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightContentWrapper}>
        <div className={styles.copyrightContent}>
          <div className={styles.productivityToolsFocusContainer}>
            <p className={styles.productivityTools}>Productivity Tools</p>
            <p className={styles.focusMode}>{`Focus Mode & Habit Tracking`}</p>
          </div>
          <div className={styles.information}>
            <div className={styles.elevateYourStudy}>
              Elevate your study efficiency with our productivity-enhancing
              tools. Focus Mode helps you eliminate distractions by blocking
              non-essential apps and notifications during study sessions.
              Meanwhile, our Habit Tracking feature allows you to monitor and
              analyze your study habits, helping you to develop more effective
              routines and achieve your academic goals with greater discipline
              and consistency.
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="/rectangle-1@2x.png"
            />
            <img
              className={styles.zigzag36Icon2}
              loading="lazy"
              alt=""
              src="/zigzag-36-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
