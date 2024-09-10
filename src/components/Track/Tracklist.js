import React, { useState, useEffect } from 'react';
import SearchBar from '../Search/SearchBar';
import axios from 'axios';

function SearchResults({userInput, setUserInput}) {
    const [results, setResults] = useState([]);

    useEffect(() => {
    async function fetchData(input) {
    // if token is not create, search doesn't happen
      try {
        // get the token
        const userToken = await this.getToken();
        const baseUrl = "https://api.spotify.com/v1/search?";
        const endpoint = `${baseUrl}q=${userInput}&type=track`;
        // Continue with search implementation
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });
        if (response.ok) {
            const data = await response.json();
            // get correct data from response
            const items = data.tracks.items;
            // refactor returned objects into objects with needed data
            const finalArray = [];
            for (let result of results) {
                let track = {};
                track.name = result.name;
                track.id = result.id;
                track.album = result.album.name;
                track.artist = result.artists[0].name;
                track.previewUrl = result.preview_url;
            }
        }
    } catch (error) {
        console.log(`There was an error when searching: ${error}`);
        return [];
    }
}
}, [userInput]);

const handleSearch = async () => {
    try {
        const results = await Spotify.search(userInput, { type: 'track' });
        setResults(results);
        setUserInput("");
    } catch (error) {
        console.log(`There was an error in App.js handleSearch: ${error}`);
    }
};

    return (
        <div>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        <h3>{result.name}</h3>
                        <p>Album: {result.album}</p>
                        <p>Artist: {result.artist}</p>
                        <audio controls>
                            <source src={result.previewUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResults;
