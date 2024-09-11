import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Login from '../Login/Login';
import Tracklist from '../Track/Tracklist';
import App from '../App/App';

function SearchResults({results, 
    handleAddToPlaylist,
    handleRemoveFromPlaylist,
    handleToggleTrackInPlaylist,
    isTrackInPlaylist}) {

    return (
        <div>
            <Tracklist tracks={results} handleAddToPlaylist={handleAddToPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} handleToggleTrackInPlaylist={handleToggleTrackInPlaylist} isTrackInPlaylist={isTrackInPlaylist}/>
        </div>
    )
}

export default SearchResults;
