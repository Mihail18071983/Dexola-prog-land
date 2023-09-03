import React, { useState, useEffect } from "react";
import { animated, useTransition, easings } from "@react-spring/web";
import styles from "./Hero.module.scss";
import { MainTitle } from "./MainTitle";
import { heroVar1, heroVar2 } from "../../imageHeroes";
import containerStyles from "../../Container.module.scss";


export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroVar1.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
                    backgroundImage: `url(${heroVar1[i].path})`,
                    position: "absolute",
                    top: "100%",
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
                    backgroundImage: `url(${heroVar2[i].path})`,
                    position: "absolute",
                    top: '100%',
                    left: "50%",
                    transform: "translateY(-100%)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.animation}>
        <div
          style={{ overflow: "hidden" }}
          className={containerStyles.container}
        >
          <MainTitle text="dexola camp" />
          <p className={styles.text1}>
            Prepare to be transported beyond the boundaries of traditional
            gaming with the StarRunner Ecosystem – the beating heart that drives
            the adrenaline-charged galactic P2E odyssey of 'StarRunner.'
          </p>
        </div>
      </section>
    </>
  );
};
