import React, { useState, useEffect } from 'react';
import Track from './Track';
import styles from './Tracklist.module.css';


function Tracklist({tracks, 
    handleToggleTrackInPlaylist, 
    isTrackInPlaylist,
    handleRemoveFromPlaylist,
    handleAddToPlaylist,
    handlePlayingTrack
}) {

    return (
        <div className={styles.container}>
                {tracks? (
                tracks.map((track) => {
                    return (
                    <Track 
                    key={track.id}
                    trackUri={`spotify:track:${track.id}`}
                    trackName={track.name}
                    albumName={track.album}
                    artistName={track.artist} 
                    trackPreview={track.preview_url} 
                    albumArt={track.albumArt}
                    handleToggleTrackInPlaylist={handleToggleTrackInPlaylist}
                    isTrackInPlaylist={isTrackInPlaylist}
                    handleAddToPlaylist={handleAddToPlaylist}
                    handleRemoveFromPlaylist={handleRemoveFromPlaylist}
                    handlePlayingTrack={handlePlayingTrack}
                    track={track}/>
                   
                    ) } )) 
                : "No tracks found."  }
        </div>
    )
}

export default Tracklist;
