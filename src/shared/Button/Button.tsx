import React, {ReactNode} from "react";

import styles from "./Button.module.scss";

interface IProps {
  type: "submit" | "reset" | "button";
  children: ReactNode;
  url?: string;
}

export const Button = ({ type = "button", children }: IProps) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};
