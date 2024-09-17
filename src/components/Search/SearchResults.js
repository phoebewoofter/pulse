import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Track/Tracklist';

function SearchResults({results, 
    handleAddToPlaylist,
    handleRemoveFromPlaylist,
    handleToggleTrackInPlaylist,
    isTrackInPlaylist,
    handlePlayingTrack}) {
    return (
        <div className={styles.background}>
            <h2 className={styles.title}>Results</h2>
            <Tracklist tracks={results} handleAddToPlaylist={handleAddToPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} handleToggleTrackInPlaylist={handleToggleTrackInPlaylist} isTrackInPlaylist={isTrackInPlaylist} handlePlayingTrack={handlePlayingTrack}/>
        </div>
    )
}

export default SearchResults;
