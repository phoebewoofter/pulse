import React from 'react';
import styles from './Logo.module.css';

function Logo() {
    return (
        <div className={styles.container}>
            <img className={styles.imgDynamic} src={require("./dynamic_logo.png")}/>
            <img className={styles.imgStat} src={require("./static_logo.png")}/>
        </div>
    )
}

export default Logo;