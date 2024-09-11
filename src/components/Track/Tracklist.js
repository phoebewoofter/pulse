import React, { useState, useEffect } from 'react';
import Track from './Track';
import styles from './Tracklist.module.css';
import App from '../App/App';


function Tracklist({tracks, handleAddToPlaylist}) {

    return (
        <div className={styles.container}>
                {tracks? (
                tracks.map((track) => {
                    return (
                    <Track 
                    key={track.id}
                    trackName={track.name}
                    albumName={track.album}
                    artistName={track.artist} 
                    trackPreview={track.preview_url} 
                    albumArt={track.albumArt}
                    handleAddToPlaylist={handleAddToPlaylist}/>
                    ) } )) 
                : "No tracks found."  }
        </div>
    )
}

export default Tracklist;
