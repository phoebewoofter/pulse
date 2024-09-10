import React from 'react';
import styles from './Logo.module.css';

function Logo() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img className={styles.imgDynamic} src={require("./dynamic_logo.png")} alt="" />
                <img className={styles.imgStat} src={require("./static_logo.png")} alt="" />
            </div>
        </div>
    );
}

export default Logo;
