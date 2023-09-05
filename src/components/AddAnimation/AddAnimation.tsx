import React, { memo } from "react";

import styles from "./AddAnimation.module.scss";
import containerStyles from "../../Container.module.scss";

import { animated, useSpring, SpringValues } from "@react-spring/web";

type MySpringValues = SpringValues<{
  opacity: number
  transform: string
}>

interface IProps {
  springValue: MySpringValues;
  isAnimating: boolean;
}

export const AddAnimation = memo(({springValue, isAnimating }:IProps) => {
  const [springText] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    config: { duration: 2000 },
  }));

  return (
    <section className={styles.addAnimation}>
      <div className={containerStyles.container}>
        <div className={styles.wrapper}>
          {isAnimating && (
            <animated.div
              style={springValue}
              className={styles.animationWrapper}
            >
              <div className={styles.animatedP1}></div>
              <div className={styles.animatedP2}></div>
            </animated.div>
          )}
          <animated.div
            style={springText}
            className={styles.animatedTextWrapper}
          >
            <h2 className={styles.animatedText}>
              <span>Explore Cyberpunk Space Adventures in</span>
              <span className={styles.heading}> StarRunner ecosystem</span>
            </h2>
          </animated.div>
        </div>
      </div>
    </section>
  );
});
