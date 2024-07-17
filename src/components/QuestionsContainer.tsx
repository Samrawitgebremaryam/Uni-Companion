import { FunctionComponent } from "react";
import styles from "./QuestionsContainer.module.css";

export type QuestionsContainerType = {
  className?: string;
};

const QuestionsContainer: FunctionComponent<QuestionsContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.questionsContainer, className].join(" ")}>
      <div className={styles.questionContainer}>
        <div className={styles.faqItemExpanded}>
          <div className={styles.answerContent}>
            <b className={styles.howCanI}>
              How can I access course information and schedules?
            </b>
            <div className={styles.weuiarrowFilled} />
          </div>
          <img
            className={styles.faqItemDivider}
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <div className={styles.answerContentWrapper}>
          <div className={styles.answerContent1}>
            <div className={styles.accessibilityDivider}>
              <img
                className={styles.accessibilityDividerChild}
                alt=""
                src="/rectangle-6.svg"
              />
              <img
                className={styles.accessibilityDividerItem}
                alt=""
                src="/group-459.svg"
              />
              <img
                className={styles.faqImageShape}
                loading="lazy"
                alt=""
                src="/vector-11.svg"
              />
              <div className={styles.rectangleParent}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle1@2x.png"
                />
                <img
                  className={styles.zigzag36Icon}
                  loading="lazy"
                  alt=""
                  src="/zigzag-36-3.svg"
                />
              </div>
            </div>
            <div className={styles.youCanAccess}>
              You can access course information and class schedules through the
              centralized information repository within the Uni Companion app.
              Simply log in to your account, navigate to the "Courses" or
              "Schedules" section from the main menu, and you'll find up-to-date
              details about your classes, including course descriptions,
              prerequisites, time tables, and any changes or updates made by the
              university. This centralized approach ensures you always have the
              latest information at your fingertips, making it easier to plan
              your academic activities efficiently.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsContainer;
