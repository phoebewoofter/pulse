import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Login from '../Login/Login';
import Tracklist from '../Track/Tracklist';
import App from '../App/App';

function SearchResults({results, handleAddToPlaylist}) {

    return (
        <div>
            <Tracklist tracks={results} handleAddToPlaylist={handleAddToPlaylist}/>
        </div>
    )
}

export default SearchResults;
