import React, { useState, useEffect } from 'react';
import App from '../App/App';
import SearchResults from './SearchResults';
import styles from './SearchBar.module.css';


function SearchBar({handleSubmit, setUserInput, userInput}) {

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
          <input className={styles.SearchBar}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Search for tracks..."
          />
          <button className={styles.Search} type="submit">Search</button>
        </form>
      );
    }
    
    export default SearchBar;