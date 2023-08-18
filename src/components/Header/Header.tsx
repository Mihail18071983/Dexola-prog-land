import React from 'react';
import styles from "./Header.module.scss";
import containerStyles from "../../Container.module.scss";
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={containerStyles.container}>
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/"><Logo/></Link>
          <Link className={styles.link} to="/join-now">Join Now</Link>
        </nav>
      </div>
    </header>
  );
};
