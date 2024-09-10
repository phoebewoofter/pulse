import React, { useState, useEffect } from 'react';
import App from '../App/App';
import SearchResults from './SearchResults';


function SearchBar({handleSubmit}) {
    const [userInput, setUserInput] = useState("");

    const changeInput = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <>
            <input
                    placeholder="Search a song"
                    name="searchBar"
                    value={userInput}
                    type="text"
                    onChange={changeInput}
                    onKeyDown={(e) =>{
                        if(e.key === "Enter") handleSubmit(e);
                    }}
            />
        </>
    );
}

export default SearchBar;