import React from 'react';
import styles from './Track.module.css';
import Play from '../Play/Play';

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
            <div>
                <img src={albumArt} width="200" height="200" />
                <h2>{trackName}</h2>
                <div>
                    <p>{artistName}</p>
                    <p className={styles.album}>{albumName}</p>
                    {isTrackInPlaylist(track)? <button className={styles.buttonRemove} onClick={() => handleToggleTrackInPlaylist(track)}>-</button> : <button className={styles.buttonAdd} onClick={() => handleToggleTrackInPlaylist(track)}>+</button>}
                    <button className={styles.buttonPlay} onClick={() => handlePlayingTrack(track)}>Play</button>
                </div>
            </div>
        </div>
    );
}