import React from 'react';
import styles from './Play.module.css';


export default function Play({ audio  }) {

    return (
        <div className={styles.play} >
            <div className={styles.iconContainer}>
                <svg>
                    <path />
                </svg>
            </div>
            <audio src={audio?.preview_url}></audio>
        </div>
    )
}