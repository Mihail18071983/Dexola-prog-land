import React, {memo} from "react";
import styles from "./MainTitle.module.scss";
import { animated, useSpring, easings } from "@react-spring/web";


interface IProps {
  text: string;
}

export const MainTitle = memo(({ text }: IProps) => {

  const spring = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(100%)" },
    config: { duration: 4000, easing: easings.easeInCubic },
    reset: true,
    loop: true
  });
  
  return (
    <div className={styles.wrapper}>
      <animated.h1 style={{...spring}} className={styles.title}>
        {text}
      </animated.h1>
    </div>
  );
});
