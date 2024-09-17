import React, { useState, useEffect } from 'react';
import App from '../App/App';
import SearchResults from './SearchResults';
import styles from './SearchBar.module.css';


function SearchBar({handleSubmit, setUserInput, userInput}) {

  const [debouncedInput, setDebouncedInput] = useState(userInput);

  useEffect(() => {
      const handler = setTimeout(() => {
          setUserInput(debouncedInput);
      }, 300); // Adjust the delay as needed

      return () => {
          clearTimeout(handler);
      };
  }, [debouncedInput, setUserInput]);

    return (
      <div>
        <form className={styles.container} onSubmit={handleSubmit}>
          <input className={styles.SearchBar}
            type="text"
            value={debouncedInput}
            onChange={(e) => setDebouncedInput(e.target.value)}
            placeholder="Search for tracks..."
          />
          <button className={styles.Search} type="submit">Search</button>
        </form>
      </div>
      );
    }
    
    export default SearchBar;