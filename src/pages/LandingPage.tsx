import { FunctionComponent } from "react";
import Content from "../components/Content";
import FormContainer from "../components/FormContainer";
import BenefitsContent from "../components/BenefitsContent";
import QuestionsContainer from "../components/QuestionsContainer";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <main className={styles.landingPage1}>
        <img
          className={styles.landingPageChild}
          alt=""
          src="/rectangle-21.svg"
        />
        <Content />
        <div className={styles.landingPageInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.learnMore}>Learn more</div>
        <img className={styles.landingPageItem} alt="" src="/group-711.svg" />
        <section className={styles.nameField}>
          <div className={styles.explore}>
            <div className={styles.linkItems}>
              <div className={styles.excel}>
                <h3 className={styles.explore1}>Explore</h3>
                <div className={styles.engageWrapper}>
                  <h3 className={styles.engage}>Engage</h3>
                </div>
                <h3 className={styles.excel1}>Excel</h3>
              </div>
            </div>
            <div className={styles.columnLeft}>
              <div className={styles.discoverAcademicTools}>
                Discover academic tools and resources at your fingertips with
                Uni Companion, streamlining your university journey from day
                one.
              </div>
              <div className={styles.diveIntoDynamic}>
                Dive into dynamic study sessions with our AI-powered quizzes,
                designed to boost retention and understanding.
              </div>
              <div className={styles.achieveAcademicExcellence}>
                Achieve academic excellence with direct access to mentors and
                vital resources, empowering your path to success.
              </div>
            </div>
          </div>
        </section>
        <div className={styles.featuresWrapper}>
          <h2 className={styles.features}>Features</h2>
        </div>
        <section className={styles.featuresList}>
          <FormContainer />
          <BenefitsContent />
        </section>
        <div className={styles.phstackFill} />
        <section className={styles.aboutContainerWrapper}>
          <div className={styles.aboutContainer}>
            <h2 className={styles.aboutUs}>About us</h2>
            <div className={styles.emailContainerWrapper}>
              <div className={styles.emailContainer}>
                <div className={styles.welcomeToUniContainer}>
                  <p
                    className={styles.welcomeToUni}
                  >{`Welcome to Uni Companion , `}</p>
                  <p className={styles.guidingYouFrom}>
                    Guiding You from Freshman Orientation to Final Exam!
                  </p>
                </div>
                <div className={styles.emailContainerInner}>
                  <div className={styles.ourMissionIsTransformingThParent}>
                    <div className={styles.ourMissionIsContainer}>
                      <p className={styles.ourMissionIs}>
                        Our mission is Transforming the university students’
                      </p>
                      <p className={styles.experienceThroughCentralized}>
                        experience through centralized resources, a
                      </p>
                      <p className={styles.supportiveTechDrivenCommuni}>
                        supportive tech-driven community, and
                      </p>
                      <p className={styles.seamlessAiIntegration}>
                        seamless AI integration to empower students
                      </p>
                      <p className={styles.toReachTheir}>
                        to reach their full potential.
                      </p>
                    </div>
                    <div className={styles.joinUsOn}>
                      Join us on this journey to revolutionize education and
                      achieve your academic goals with confidence.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.faqWrapper}>
          <h2 className={styles.faq}>FAQ</h2>
        </div>
        <QuestionsContainer />
        <section className={styles.quoteContainerWrapper}>
          <div className={styles.quoteContainer}>
            <h1 className={styles.yourCompanionFromContainer}>
              <p
                className={styles.yourCompanionFrom}
              >{`Your Companion from Freshman Year to `}</p>
              <p className={styles.exitExam}>Exit Exam</p>
            </h1>
            <h1 className={styles.h1}>“</h1>
          </div>
        </section>
        <FrameComponent />
        <Footer />
        <div className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.allRightsReserved}>
              ©. 2022. All rights reserved
            </div>
            <div className={styles.languageRegionContainer}>
              <div className={styles.languageRegionContainer1}>
                <span>{`Language & region: `}</span>
                <span className={styles.englishIn}>English (IN)</span>
              </div>
              <div className={styles.emailInput}>
                <img
                  className={styles.featureShapeIcon}
                  alt=""
                  src="/vector-61.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
