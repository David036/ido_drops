import React from "react";
import Logo from "../../shared/logo";

import styles from "./header.module.scss";

export default function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logoSection}>
          <Logo />
        </div>
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.valuteSection}>
          <div className={styles.btc}>
            <span>BTC $19305</span>
            <span>+0.1%</span>
          </div>
          <div className={styles.eth}>
            <span>ETH $1309</span>
            <span>-0.3%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
