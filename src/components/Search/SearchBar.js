import React, { useState, useEffect } from 'react';
import App from '../App';
import axios from 'axios';
import SearchResults from './SearchResults';


function SearchBar() {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }

    return (
        <>
            <form id="searchBar" name="searchBar" onSubmit={handleSubmit}>
                <input
                    placeholder="Search a song"
                    name="searchBar"
                    value={userInput}
                    type="text"
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default SearchBar;