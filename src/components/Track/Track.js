import React from 'react';
import styles from './Track.module.css';

export default function Track({
    trackName,
    artistName,
    albumName
}) {
    return (
        <div className={styles.container}>
                <h2>{trackName}</h2>
                <div>
                    <p>
                        {artistName}
                    </p>
                    <p>
                        |
                    </p>
                    <p>{albumName}</p>
                </div>
        </div>
    );
}