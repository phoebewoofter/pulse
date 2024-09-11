import React from "react";
import App from '../App/App';
import Tracklist from "../Track/Tracklist";
import styles from './Playlist.module.css';

export default function Playlist({playlistName, handlePlaylistNameChange, playlist}) {
  
    return (
        <div className={styles.container}>
            <input className={styles.input}
                type="text" value={playlistName} placeholder="Name your playlist..." onChange={handlePlaylistNameChange}/>
            <Tracklist track={playlist}
            />
            <button className={styles.Spotify}>
                Save to Spotify
            </button>
        </div>
    );
}