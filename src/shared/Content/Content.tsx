import React from "react";
import styles from "./Content.module.scss";

interface IProps {
    text:string
}

export const Content = ({text}:IProps) => {
  return (
    <p className={styles.content}>
      {text}
    </p>
  );
};
