import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';

function Login() {
  const CLIENT_ID = "84b572100dda404a8debfc4a94bda0f4";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    console.log("Hash:", hash); // Log the hash to see if it contains the access_token
    let token = window.sessionStorage.getItem("token");
    if (!token && hash) {
      const params = new URLSearchParams(hash.substring(1));
      token = params.get("access_token");
      console.log("Token found in hash:", token); // Log the token found in the hash
      if (token) {
        window.location.hash = "";
        window.sessionStorage.setItem("token", token);
        setToken(token);
        console.log("Token set:", token); // Log the token after setting it
      }
    } else if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div className={styles.container}>
      {!token ? (
        <a
          className={styles.Login}
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Log In
        </a>
      ) : (
        <div>Logged in</div>
      )}
    </div>
  );
}

export default Login;


