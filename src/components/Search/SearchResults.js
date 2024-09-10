import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Login from '../Login/Login';
import Tracklist from '../Track/Tracklist';
import App from '../App/App';

function SearchResults({results}) {

    return (
        <div>
            <Tracklist tracks={results}/>
        </div>
    )
}

export default SearchResults;
