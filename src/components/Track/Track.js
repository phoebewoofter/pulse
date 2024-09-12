import React from 'react';
import styles from './Track.module.css';

export default function Track({
    track,
    trackName,
    artistName,
    albumName,
    albumArt, 
    handleToggleTrackInPlaylist,
    isTrackInPlaylist,
    handlePlayTrack
}) {
    return (
        <div className={styles.container}>
            <div>
                <img src={albumArt} width="200" height="200" />
                <h2>{trackName}</h2>
                <div>
                    <p>{artistName}</p>
                    <p className={styles.album}>{albumName}</p>
                    {isTrackInPlaylist(track)? <button className={styles.buttonRemove} onClick={() => handleToggleTrackInPlaylist(track)}>-</button> : <button className={styles.buttonAdd} onClick={() => handleToggleTrackInPlaylist(track)}>+</button>}
                    <button className={styles.buttonPlay} onClick={() => handlePlayTrack(track)}>Play</button>
                </div>
            </div>
        </div>
    );
}