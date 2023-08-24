import React from "react";
import styles from "./Features.module.scss";
import containerStyles from "../../Container.module.scss";
import { SectionTitle } from "../../shared/Title/SectionTitle";
import { FeaturesList } from "../Hero/FeaturesList";


export const Features = () => {
  return (
    <section className={styles.features}>
      <div className={containerStyles.container}>
        <SectionTitle part1={"Features"} part2={"01"} />
        <div className={styles.infoWrapper}>
          <h3 className={styles.subTitle}>About StarRunner</h3>
          <p className={styles.content}>
            The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
            living, evolving entity that adapts to the desires and creativity of
            its players.
          </p>
        </div>
        <FeaturesList/>
      </div>
    </section>
  );
};
