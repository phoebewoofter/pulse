import React, { useState, useEffect } from 'react';
import App from './App.js';
import axios from 'axios';

function SpotifySearch() {
    const [userInput, setUserInput] = useState("");
    const [searchType, setSearchType] = useState("track");
    const [results, setResults] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (userInput) {
                try {
                    const response = await axios.get('https://api.spotify.com/v1/search', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                        params: {
                            q: userInput,
                            type: searchType
                        }
                    });
                    setResults(response.data[`${searchType}s`].items);
                } catch (error) {
                    console.log('No match, please try again', error);
                }
            }
        };

        fetchData();
    }, [userInput, searchType]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert({userInput});
    }
    
    return (
        <>
          <form onSubmit={handleSubmit}>
            <input name="searchBar" value={userInput} type="text" onChange={(e) => setUserInput(e.target.value)}/>
          </form>
          <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="track">Track</option>
            <option value="album">Album</option>
            <option value="artist">Artist</option>
            <option value="playlist">Playlist</option>
            <option value="show">Show</option>
            <option value="episode">Episode</option>
      </select>
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
         </>
    )
}

export default SpotifySearch;