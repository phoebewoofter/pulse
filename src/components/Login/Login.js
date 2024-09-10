import React, {useState, useEffect} from 'react';
import styles from './Login.module.css';

function Login() {

const CLIENT_ID = "84b572100dda404a8debfc4a94bda0f4";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REPONSE_TYPE = "token";

const [token, setToken] = useState("");

useEffect(() => {
  const hash = window.location.hash;
  let token = window.sessionStorage.getItem("token");
  if (!token && hash) {
    token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token").split("=")[1]);
    
    window.location.hash = "";
    window.sessionStorage.setItem("token", token);
    setToken(token);
  }

}, []);

return (
    <div className={styles.container}>
        {!token ? <a className={styles.Login} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${REPONSE_TYPE}`}>Log In</a> : <div></div> }
    </div>
)
}

export default Login;