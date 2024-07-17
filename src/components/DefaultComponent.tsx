import { FunctionComponent } from "react";
import Component7Variant1 from "./Component7Variant1";
import styles from "./DefaultComponent.module.css";

export type DefaultComponentType = {
  className?: string;
};

const DefaultComponent: FunctionComponent<DefaultComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.defaultComponent, className].join(" ")}>
      <div className={styles.defaultContent}>
        <div className={styles.defaultContainer}>
          <Component7Variant1
            propAlignSelf="unset"
            propWidth="463px"
            propMinWidth="unset"
          />
          <div className={styles.tipComponent}>
            <div className={styles.component7default}>
              <div className={styles.component7defaultChild} />
              <div className={styles.tip}>Tip</div>
              <div className={styles.tipLorem}>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  porta tincidunt lectus eget semper. Donec vulputate tincidunt
                  semper. In non feugiat ligula. Duis urna qua
                </div>
              </div>
            </div>
          </div>
        </div>
        <Component7Variant1
          propAlignSelf="unset"
          propWidth="463px"
          propMinWidth="463px"
        />
      </div>
    </div>
  );
};

export default DefaultComponent;
