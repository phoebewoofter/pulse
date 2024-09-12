import Logo from '../Logo/Logo';
import React, { useEffect, useState } from 'react';
import SearchBar from '../Search/SearchBar';
import SearchResults from '../Search/SearchResults';
import Login from '../Login/Login';
import styles from './App.module.css';
import Playlist from '../Playlist/Playlist';


function App() {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [playlistName, setPlaylistName] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [playlistUris, setPlaylistUris] = useState([]);

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
                  albumArt: track.album.images[0].url
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

const handlePlaylistNameChange = (e) => {
     e.preventDefault();
     setPlaylistName(e.target.value);
}

const handleAddToPlaylist = (track) => {
     // Add the track to the playlist
     setPlaylist([...playlist, track]);
}

const handleRemoveFromPlaylist = (track) => {
     // Remove the track from the playlist
     setPlaylist(playlist.filter((t) => t.id!== track.id));
}

const isTrackInPlaylist = (track) => {
    return playlist.some((t) => t.id === track.id);
};

const handleToggleTrackInPlaylist = (track) => {
    if (isTrackInPlaylist(track)) {
        handleRemoveFromPlaylist(track);
    } else {
        handleAddToPlaylist(track);
    }
};

const handleCreatePlaylist = async (playlist, playlistName, setPlaylistUris) => {
    try {
        let token = await getAccessToken();
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
        let userId = userData.id;
        console.log('User ID:', userId);

        // Step 2: Create a new playlist
        let playlistResponse = await fetch(
            `https://api.spotify.com/v1/users/${userId}/playlists`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: playlistName,
                    public: true,
                }),
            }
        );
        if (!playlistResponse.ok) {
            let errorData = await playlistResponse.json();
            throw new Error(`Failed to create playlist: ${errorData.error.message}`);
        }
        let playlistData = await playlistResponse.json();
        let playlistId = playlistData.id;
        console.log('Playlist ID:', playlistId);

        // Step 3: Set the track URIs
        let trackUris = playlist.map((track) => `spotify:track:${track.id}`);
        console.log('Track URIs:', trackUris);

        // Step 4: Add tracks to the playlist
        let addTracksResponse = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uris: trackUris,
                }),
            }
        );
        if (!addTracksResponse.ok) {
            let errorData = await addTracksResponse.json();
            throw new Error(`Failed to add tracks to playlist: ${errorData.error.message}`);
        }

        console.log('Playlist created and tracks added successfully');
    } catch (error) {
        console.log(`There was an error when creating a playlist: ${error.message}`);
    }
};


  return (
    <div className={styles.container}>
     <Logo />
     <Login />
     <SearchBar
      setUserInput={setUserInput}
      handleSubmit={handleSubmit}
      userInput={userInput} />
      <div className={styles.body}>
     <SearchResults results={results} handleAddToPlaylist={handleAddToPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} handleToggleTrackInPlaylist={handleToggleTrackInPlaylist} playlistName={playlistName}
    isTrackInPlaylist={isTrackInPlaylist}/>
     <Playlist handleRemoveFromPlaylist={handleRemoveFromPlaylist} handlePlaylistNameChange={handlePlaylistNameChange} playlist={playlist} handleToggleTrackInPlaylist={handleToggleTrackInPlaylist} playlistName={playlistName}
    isTrackInPlaylist={isTrackInPlaylist} handleAddToPlaylist={handleAddToPlaylist} handleCreatePlaylist={handleCreatePlaylist}/>
     </div>
    </div>
  );
}
export default App;