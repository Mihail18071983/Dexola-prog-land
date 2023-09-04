import React, { memo, useState } from "react";
import styles from "./AddAnimation.module.scss";
import containerStyles from "../../Container.module.scss";

import { animated, useSpring } from "@react-spring/web";

export const AddAnimation = memo(() => {
  const [isAnimating, setIsAnimating] = useState(false);

  const [springCircles] = useSpring(() => ({
    from: { transform: "scale(0.1)", opacity: 1 },
    to: { transform: "scale(10)", opacity: 0 },
    config: { duration: 5000 },
    onStart: () => {
      setIsAnimating(true);
    },
    onRest: () => {
      setIsAnimating(false);
    },
  }));

  const [springText] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    config: { duration: 5000 },
  }));

  return (
    <section className={styles.addAnimation}>
      <div className={containerStyles.container}>
        <div className={styles.wrapper}>
          {isAnimating && (
            <animated.div
              style={springCircles}
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