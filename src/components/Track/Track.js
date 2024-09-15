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
    handlePlayingTrack
}) {
    return (
        <div className={styles.container}>
            <div className={styles.trackBox}>
                <img src={albumArt} className={styles.albumArt} />
                <div className={styles.trackInfo}>
                    <h2>{trackName}</h2>
                    <p>{artistName}</p>
                    <p className={styles.album}>{albumName}</p>
                        {isTrackInPlaylist(track)? <button className={styles.buttonRemove} onClick={() => handleToggleTrackInPlaylist(track)}>-</button> : <button className={styles.buttonAdd} onClick={() => handleToggleTrackInPlaylist(track)}>+</button>}
                        <button className={styles.buttonPlay} onClick={() => handlePlayingTrack(track)}>Play</button>
                </div>
            </div>
        </div>
    );
}