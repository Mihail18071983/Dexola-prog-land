import React from "react";
import styles from "./Footer.module.scss";
import containerStyles from "../../Container.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookLogo } from "../../assets/svg/facebook.svg";
import { ReactComponent as InstagrammLogo } from "../../assets/svg/instagram.svg";
import { ReactComponent as DiscordLogo } from "../../assets/svg/discord.svg";
import { ReactComponent as TelegrammLogo } from "../../assets/svg/telegram.svg";
import { Content } from "../../shared/Content/Content";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${containerStyles.container} ${styles.wrapper}`}>
        <div className={styles.socialWrapper}>
          <Link className={styles.link} to="">
            <FacebookLogo />
          </Link>
          <Link className={styles.link} to="">
            <InstagrammLogo />
          </Link>
          <Link className={styles.link} to="">
            <DiscordLogo />
          </Link>
          <Link className={styles.link} to="">
            <TelegrammLogo />
          </Link>
        </div>
        <Content
          className={`${styles.content} ${styles.right}`}
          text="Designed by Dexola - 2023"
        />
        <Content
          className={`${styles.content} ${styles.left}`}
          text="© All rights reserved"
        />
      </div>
    </footer>
  );
};
