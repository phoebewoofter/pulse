import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';

function Login() {
  const CLIENT_ID = "84b572100dda404a8debfc4a94bda0f4";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("")

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

async function getUserId(token) {
  try {
    console.log('Access Token:', token);

    // Step 1: Get the user's Spotify ID
    let userResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!userResponse.ok) {
        throw new Error('Failed to get user ID');
    }
    let userData = await userResponse.json();
    setUserId(userData.id);
    console.log('User ID:', userId);
  } catch (error) {
    console.error('Error:', error);
  }
  return userId;
}

  return (
    <div className={styles.container}>
      {!token ? (
        <div>
        <p className={styles.p}>Sign in to Spotify to listen to all your favorite songs. And maybe discover some new ones along the way.</p>
        <a
          className={styles.Login}
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Log In
        </a>
        </div>
      ) : (
        <div className={styles.userId} onClick={() => getUserId(token)}>Hey, <span className={styles.userIdSpan}>{userId}</span></div>
      )}
    </div>
  );
}

export default Login;
