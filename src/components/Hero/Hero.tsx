import React, { useState, useEffect } from "react";
import { animated, useTransition, easings } from "@react-spring/web";
import styles from "./Hero.module.scss";
import { MainTitle } from "./MainTitle";
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

  const transitions1 = useTransition(activeIndex, {
    key: activeIndex,
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000, easing: easings.easeInCubic },
  });

  const transitions2 = useTransition(activeIndex, {
    delay: 1000,
    key: activeIndex,
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000, easing: easings.easeInCubic },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imagePath1.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [imagePath1.length]);

  return (
    <>
      <section className={styles.hero}>
        <div className={containerStyles.container}>
          <div className={styles.wrapper}>
            <p className={styles.text}>
              Prepare to be transported beyond the boundaries of traditional
              gaming with the StarRunner Ecosystem – the beating heart that
              drives the adrenaline-charged galactic P2E odyssey of
              'StarRunner.'
            </p>
            <div className={styles.imageContainer}>
              {transitions1((style, i) => (
                <animated.div
                  key={i}
                  className={styles.image}
                  style={{
                    ...style,
                    background: `url(${imagePath1[i]}) center/cover no-repeat`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translateY(-100%)",
                  }}
                />
              ))}
              {transitions2((style, i) => (
                <animated.div
                  key={i}
                  className={styles.image}
                  style={{
                    ...style,
                    background: `url(${imagePath2[i]}) center/cover no-repeat`,
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateY(-100%)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
          <MainTitle text="dexola camp" />
      </section>
    </>
  );
};
