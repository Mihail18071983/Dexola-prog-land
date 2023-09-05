import React, { FC, MutableRefObject, memo } from "react";
import { animated, useSpring } from "@react-spring/web";

import styles from "./Header.module.scss";
import containerStyles from "../../Container.module.scss";

import { Logo } from "../../shared/svgComponents/Logo";
import { Link } from "react-router-dom";
import { Button } from "../../shared/Button/Button";

interface HeaderProps {
  headerRef: MutableRefObject<HTMLElement | null>;
  scrollToJoinUs: () => void;
  isAnimating: boolean;
}

export const Header: FC<HeaderProps> = memo(
  ({ headerRef, scrollToJoinUs, isAnimating }) => {
    const navSpring = useSpring({
      delay: 5000,
      from: {
        opacity: 0,
      },
      to: { opacity: 1 },
      config: { duration: 500 },
    });
    return (
      <header ref={headerRef} className={styles.header}>
        <div className={containerStyles.container}>
          {!isAnimating && (
            <animated.div style={navSpring} className={styles.nav}>
              <Link
                to="https://dexola.com"
                aria-label="logo dx"
                className={styles.header_logo}
              >
                <Logo width="35" height="20" className={styles.icon} />
              </Link>
              <Button
                type="button"
                className={styles.link}
                onClick={scrollToJoinUs}
              >
                Join Now
              </Button>
            </animated.div>
          )}
        </div>
      </header>
    );
  }
);
