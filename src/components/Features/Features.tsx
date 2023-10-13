import React, { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "../../hooks/useAnimation";
import styles from "./Features.module.scss";
import containerStyles from "../../Container.module.scss";
import { SectionTitle } from "../../shared/Title/SectionTitle";
import { SubTitle } from "../../shared/SubTitle/SubTitle";
import { FeaturesList } from "../Hero/FeaturesList";
import { Content } from "../../shared/Content/Content";
import { animated } from "@react-spring/web";


export const Features = memo(() => {
  const { props,api:featuresApi } = useAnimation();

  const [featureRef, featureInView] = useInView();
  useEffect(() => {
    if (featureInView) {
      featuresApi.start({
        transform: "translateX(0)",
        scale: 1,
        delay: 500,
        config: {
          duration: 1000,
        },
      });
    } else {
      featuresApi.start({ transform: "translateX(100%)", scale: 0 });
    }
  }, [featureInView, featuresApi]);
  return (
    <section ref={featureRef} className={styles.features}>
      <animated.div style={props}>
        <div className={containerStyles.container}>
          <SectionTitle part1={"Features"} part2={"01"} />
          <div className={styles.infoWrapper}>
            <SubTitle text="About StarRunner" />
            <Content
              text=" The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
            living, evolving entity that adapts to the desires and creativity of
            its players."
            />
          </div>
          <FeaturesList />
        </div>
      </animated.div>
    </section>
  );
});
