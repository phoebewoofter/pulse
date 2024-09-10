import React, { useState, useEffect } from 'react';
import Track from './Track';
import styles from './Tracklist.module.css';


function Tracklist({tracks}) {

    return (
        <div className={styles.container}>
                {tracks? (
                tracks.map((track) => {
                    return (
                    <Track 
                    key={track.id}
                    trackName={track.name}
                    albumName={track.album}
                    artistName={track.artist} />
                    ) } )) 
                : "No tracks found."  }
        </div>
    )
}

export default Tracklist;
