import React, {FC, MutableRefObject} from "react";
import styles from "./Header.module.scss";
import containerStyles from "../../Container.module.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  headerRef: MutableRefObject<HTMLElement | null>;
}


export const Header:FC<HeaderProps> = ({headerRef}) => {
  return (
    <header ref={headerRef} className={styles.header}>
      <div className={containerStyles.container}>
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/">
            <Logo />
          </Link>
          <Link className={styles.link} to="/join-now">
            Join Now
          </Link>
        </nav>
      </div>
    </header>
  );
};
