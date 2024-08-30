import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const CLIENT_ID = "84b572100dda404a8debfc4a94bda0f4";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token").split("=")[1]);
      
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }

  }, []);
   
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }

  return (
    <>
      <header>
        <h1>pulse</h1>
        {!token ?
         <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${REPONSE_TYPE}`}>Log in to Spotify</a>
        : <button onClick={logout}>Log out</button>}
      </header>
    </>
  );
}

export default App;
