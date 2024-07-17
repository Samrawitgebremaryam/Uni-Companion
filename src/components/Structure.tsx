import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./Structure.module.css";

export type StructureType = {
  className?: string;
};

const Structure: FunctionComponent<StructureType> = ({ className = "" }) => {
  return (
    <section className={[styles.structure, className].join(" ")}>
      <h2 className={styles.discreteMath}>Discrete Math</h2>
      <div className={styles.structure1}>
        <div className={styles.structure2}>
          <div className={styles.structure3}>
            <div className={styles.chat} />
            <div className={styles.structure4}>
              <img
                className={styles.structureChild}
                alt=""
                src="/rectangle-17921.svg"
              />
            </div>
            <div className={styles.structure5}>
              <div className={styles.resourceList}>
                <TextField
                  className={styles.structure6}
                  placeholder="Video"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="22px" height="15px" src="/vector-6.svg" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#367cff" },
                    "& .MuiInputBase-root": {
                      height: "80px",
                      backgroundColor: "#3652dd",
                      paddingRight: "31px",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "32px",
                    },
                    "& .MuiInputBase-input": { color: "#fff" },
                  }}
                />
                <div className={styles.types}>
                  <div className={styles.typesChild} />
                  <div className={styles.containers}>
                    <img
                      className={styles.containersChild}
                      alt=""
                      src="/group-434.svg"
                    />
                  </div>
                  <a
                    className={styles.resources}
                    href="https://youtu.be/rdXw7Ps9vxc?si=9BZ-15rABrL0s_8x"
                    target="_blank"
                  >
                    Resources
                  </a>
                </div>
                <TextField
                  className={styles.nd}
                  placeholder="Resources"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img
                        width="55.8px"
                        height="36.1px"
                        src="/group-432.svg"
                      />
                    ),
                  }}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      paddingLeft: "25.6px",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "37.1px",
                      color: "#000",
                    },
                  }}
                />
                <div className={styles.types1}>
                  <div className={styles.typesItem} />
                  <img
                    className={styles.typesInner}
                    alt=""
                    src="/group-433.svg"
                  />
                  <div className={styles.resourcesWrapper}>
                    <a
                      className={styles.resources1}
                      href="https://youtu.be/rdXw7Ps9vxc?si=9BZ-15rABrL0s_8x"
                      target="_blank"
                    >
                      Resources
                    </a>
                  </div>
                </div>
                <TextField
                  className={styles.types2}
                  placeholder="Resources"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img
                        width="55.8px"
                        height="36.1px"
                        src="/group-435.svg"
                      />
                    ),
                  }}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      paddingLeft: "25.6px",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "37.1px",
                      color: "#000",
                    },
                  }}
                />
              </div>
            </div>
            <div className={styles.structure7}>
              <img
                className={styles.structureItem}
                loading="lazy"
                alt=""
                src="/rectangle-17934.svg"
              />
            </div>
            <div className={styles.structure8}>
              <div className={styles.structure9}>
                <div className={styles.structureInner} />
                <h2 className={styles.recommendation}>Recommendation</h2>
              </div>
            </div>
            <div className={styles.structure10}>
              <div className={styles.typesParent}>
                <input className={styles.types3} type="checkbox" />
                <input className={styles.types4} type="checkbox" />
              </div>
            </div>
          </div>
          <div className={styles.structure11}>
            <a className={styles.learnMore}>Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
