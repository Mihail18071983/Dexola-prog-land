import React, { useState } from "react";
import { animated, useTransition, easings } from "@react-spring/web";
import styles from "./Hero.module.scss";
import containerStyles from "../../Container.module.scss";
import imagePath1def from "../../assets/png/pic1_def.png";
import imagePath2def from "../../assets/png/pic2_def.png";
import imagePath1var2 from "../../assets/png/pic1_var2.png";
import imagePath2var2 from "../../assets/png/pic2_var2.png";
import imagePath1var3 from "../../assets/png/pic1_var3.png";
import imagePath2var3 from "../../assets/png/pic2_var3.png";
import imagePath1var4 from "../../assets/png/pic1_var4.png";
import imagePath2var4 from "../../assets/png/pic2_var4.png";
import imagePath1var5 from "../../assets/png/pic1_var5.png";
import imagePath2var5 from "../../assets/png/pic2_var5.png";

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imagePath1 = [
    imagePath1def,
    imagePath1var2,
    imagePath1var3,
    imagePath1var4,
    imagePath1var5,
  ];
  const imagePath2 = [
    imagePath2def,
    imagePath2var2,
    imagePath2var3,
    imagePath2var4,
    imagePath2var5,
  ];

  const transitions = useTransition(activeIndex, {
    key: activeIndex,
    from: { opacity: 1 },
    enter: { opacity: 0 },
    leave: { opacity: 0 },
    config: { duration: 3000, easing: easings.easeInCubic },
    onRest: (_a, _b, item) => {
      if (activeIndex === item) {
        setActiveIndex(
          activeIndex === imagePath1.length - 1 ? 0 : activeIndex + 1
        );
      }
    },
    exitBeforeEnter: true,
  });

  return (
    <section className={styles.section}>
      <div className={containerStyles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>
            Prepare to be transported beyond the boundaries of traditional
            gaming with the StarRunner Ecosystem – the beating heart that drives
            the adrenaline-charged galactic P2E odyssey of 'StarRunner.'
          </p>
          <div className={styles.imageContainer}>
            {transitions((style, i) => (
              <animated.img
                src={imagePath1[i]}
                className={styles.image}
                style={{ ...style }}
              />
            ))}
            {transitions((style, i) => (
              <animated.img
                src={imagePath2[i]}
                className={styles.image}
                style={{ ...style }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
