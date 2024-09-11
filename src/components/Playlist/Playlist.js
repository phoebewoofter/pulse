import React from "react";
import Tracklist from "../Track/Tracklist";
import styles from './Playlist.module.css';

export default function Playlist({
    playlistName, 
    handlePlaylistNameChange, 
    handleToggleTrackInPlaylist, isTrackInPlaylist, 
    handleAddToPlaylist, 
    handleRemoveFromPlaylist, 
    playlist}) {
  
    return (
        <div className={styles.container}>
            <input className={styles.input}
                type="text" value={playlistName} placeholder="Name your playlist..." onChange={handlePlaylistNameChange}/>
            <Tracklist tracks={playlist}
            handleToggleTrackInPlaylist={handleToggleTrackInPlaylist} isTrackInPlaylist={isTrackInPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} handleAddToPlaylist={handleAddToPlaylist}/>
            <button className={styles.Spotify}>
                Save to Spotify
            </button>
        </div>
    );
}