import React from 'react';
import styles from './Play.module.css';


export default function Play({ trackName  }) {

    return (
        <div className={styles.play}>
            <audio controls></audio>
        </div>
    )
}