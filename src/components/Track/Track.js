import React from 'react';
import styles from './Track.module.css';

export default function Track({
    trackName,
    artistName,
    albumName,
    trackPreview,
    albumArt
}) {
    return (
        <div className={styles.container}>
            <div>
                <img src={albumArt} width="200" height="200" />
                <h2>{trackName}</h2>
                <div>
                    <p>{artistName}</p>
                    <p className={styles.album}>{albumName}</p>
                </div>
            </div>
        </div>
    );
}