import React from 'react';
import styles from './Play.module.css';


export default function Play({ playingTrack }) {
return (
    <div>
    {playingTrack && (
        <div className={styles.play}>
            <img className={styles.albumCover} src={playingTrack.albumArt} alt={`${playingTrack.name} album art`} />
         <div className={styles.info}>
          <h2>{playingTrack.name}</h2>
          <p>{playingTrack.artist} - {playingTrack.album}</p>
         </div>
          <audio className={styles.audio} controls>
            <source src={playingTrack.previewUrl} type="audio/mpeg" />
          </audio>
        </div>
    )
    }
    </div>
)
}
