import Logo from '../Logo/Logo';
import React, { useEffect, useState } from 'react';
import SearchBar from '../Search/SearchBar';
import SearchResults from '../Search/SearchResults';
import Login from '../Login/Login';
import styles from './App.module.css';


function App() {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState('');

  async function getAccessToken() {
      // Retrieve the token and expiration time from sessionStorage
      let token = sessionStorage.getItem("token");
      let expireTime = Number(sessionStorage.getItem("expireTime"));
  
      // Check if the token is not set or if it has expired
      if (!token || expireTime < new Date().getTime()) {
          const client_id = "84b572100dda404a8debfc4a94bda0f4";
  
          const redirect_uri = "http://localhost:3000";
  
          let scope = "playlist-modify-public";
  
          let url = "https://accounts.spotify.com/authorize";
          url += "?response_type=token";
          url += "&client_id=" + client_id;
          url += "&scope=" + scope;
          url += "&redirect_uri=" + redirect_uri;
  
          // If so, redirect to the authorization URL
          window.location = url;
  
          // Extract the token and expiration time from the URL
          token = window.location.href.match(/access_token=([^&]*)/)[1];
          const expiresIn =
              window.location.href.match(/expires_in=([^&]*)/)[1];
  
          // Calculate the expiration time and store it in sessionStorage
          expireTime = new Date().getTime() + Number(expiresIn) * 1000;
          sessionStorage.setItem("expireTime", expireTime.toString());
  
          // Store the token in sessionStorage
          sessionStorage.setItem("token", token);
      }
      // Return the token
      return token;
  }

  async function handleSearch(query) {
      try {
          let token = await getAccessToken();
          let response = await fetch(
              `https://api.spotify.com/v1/search?type=track&q=${query}`,
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              }
          );
          if (response.ok) {
              let data = await response.json();
              let tracks = data.tracks.items.map((track) => ({
                  name: track.name,
                  id: track.id,
                  album: track.album.name,
                  artist: track.artists[0].name,
                  previewUrl: track.preview_url,
              }));
              setResults(tracks);
          }
      } catch (error) {
          console.log(`There was an error when searching: ${error}`);
      }
  }

  const handleSubmit = (e) => {
          e.preventDefault();
          handleSearch(userInput);
      }


  return (
    <div className={styles.container}>
     <Logo />
     <Login />
     <SearchBar
      setUserInput={setUserInput}
      handleSubmit={handleSubmit}
      userInput={userInput} />
     <SearchResults results={results}/>
    </div>
  );
}
export default App;