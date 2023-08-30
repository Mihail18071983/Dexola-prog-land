import React, {FC, MutableRefObject} from "react";
import styles from "./Header.module.scss";
import containerStyles from "../../Container.module.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "../../shared/Button/Button";

interface HeaderProps {
  headerRef: MutableRefObject<HTMLElement | null>;
  scrollToJoinUs: () => void;
}


export const Header:FC<HeaderProps> = ({headerRef, scrollToJoinUs}) => {
  return (
    <header ref={headerRef} className={styles.header}>
      <div className={containerStyles.container}>
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/">
            <Logo />
          </Link>
          <Button type="button" className={styles.link} onClick={scrollToJoinUs} >
            Join Now
          </Button>
        </nav>
      </div>
    </header>
  );
};
