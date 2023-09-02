import React from "react";
import styles from "./FeaturesList.module.scss";
import { Button } from "../../shared/Button/Button";

import { imageFeatures } from "../../imageFitures";

export const FeaturesList = () => {
  return (
    <ul className={styles.list}>
      {imageFeatures.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <picture>
              <source
                srcSet={`${item.pathDesk} 1x, ${item.pathDesk2X} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${item.pathTabl} 1x, ${item.pathTabl2X} 2x`}
                media="(min-width: 744px)"
              />
              <source
                srcSet={`${item.pathMob} 1x, ${item.pathMob2X} 2x`}
                media="(max-width: 743px)"
              />
              <img loading="lazy" className={styles.image} src={item.pathMob} alt={item.name} />
            </picture>
            <div className={styles.contentWrapper}>
              <h4 className={styles.title}>
                <span>{item.id}</span>
                <span>{item.name}</span>
              </h4>
              <p className={styles.text}>{item.text}</p>
              <Button className={styles.btn} type="button">
                <span className={styles.btnContent}>discover now</span>
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
