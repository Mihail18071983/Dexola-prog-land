import React from "react";
import styles from "./FeaturesList.module.scss";
import { Button } from "../../shared/Button/Button";

import { imageItems } from "../../imageItems";

export const FeaturesList = () => {
  return (
    <ul className={styles.list}>
      {imageItems.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <img loading="lazy" className={styles.image} src={item.path} alt={item.name} />
            <div className={styles.contentWrapper}>
              <h4 className={styles.title}>
                <span>{item.id}</span>
                <span>{item.name}</span>
              </h4>
              <p className={styles.text}>{item.text}</p>
            </div>
            <Button type="button">
              <span className={styles.btnContent}>discover now</span>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
