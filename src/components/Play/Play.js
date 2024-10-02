import React, {useRef, useEffect} from 'react';
import styles from './Play.module.css';


export default function Play({ playingTrack }) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [playingTrack]);
return (
    <div>
    {playingTrack && (
        <div className={styles.play}>
            <img className={styles.albumCover} src={playingTrack.albumArt} alt={`${playingTrack.name} album art`} title={`"https://open.spotify.com/track/${playingTrack.id}`}/>
         <div className={styles.info}>
          <h2>{playingTrack.name}</h2>
          <p>{playingTrack.artist} - {playingTrack.album}</p>
         </div>
          <audio className={styles.audio} controls ref={audioRef}>
            <source src={playingTrack.previewUrl} type="audio/mpeg" />
          </audio>
        </div>
    )
    }
    </div>
)
}
