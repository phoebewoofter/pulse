import React, { useState, useEffect } from 'react';
import App from '../App';
import axios from 'axios';


function SpotifySearch({ token }) {
    const [userInput, setUserInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = async () => {
        if (userInput) {
            try {
                const response = await axios.get('https://api.spotify.com/v1/search', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    params: {
                        q: userInput,
                        type: "track"
                    }
                });

                setResults(response.data.tracks.items);
            } catch (error) {
                console.log('No match, please try again', error);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <>
            <form id="searchBar" name="searchBar" onSubmit={handleSubmit}>
                <input
                    placeholder="Search a track"
                    name="searchBar"
                    value={userInput}
                    type="text"
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map(track => (
                    <li key={track.id}>
                        {track.name} by {track.artists.map(artist => artist.name).join(', ')}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SpotifySearch;