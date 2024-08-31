import React, { useState, useEffect } from 'react';
import App from './App.js';

function SearchBar() {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert({userInput});
    }
    
    return (
        <>
         <nav>
            <form onSubmit={handleSubmit}>
                <input name="searchBar" value={userInput} type="text" onChange={(e) => setUserInput(e.target.value)}/>
            </form>
         </nav>
        </>
    )
}

export default SearchBar;