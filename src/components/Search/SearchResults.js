import React from 'react';

import Tracklist from '../Track/Tracklist';

function SearchResults({results, 
    handleAddToPlaylist,
    handleRemoveFromPlaylist,
    handleToggleTrackInPlaylist,
    isTrackInPlaylist,
    handlePlayingTrack}) {

    return (
        <div>
            <Tracklist tracks={results} handleAddToPlaylist={handleAddToPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} handleToggleTrackInPlaylist={handleToggleTrackInPlaylist} isTrackInPlaylist={isTrackInPlaylist} handlePlayingTrack={handlePlayingTrack}/>
        </div>
    )
}

export default SearchResults;
