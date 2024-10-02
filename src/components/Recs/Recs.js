import React from 'react';

export default function Recs() {
    // Authorization token that must have been created previously.

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const topTracksIds = [
  '7FOgcfdz9Nx5V9lCNXdBYv','0WbMK4wrZ1wFSty9F7FCgu','4LKYOetuIF5c9XjeLBL9av','1fujSajijBpJlr5mRGKHJN','3WSOUb3U7tqURbBSgZTrZX'
];

async function getRecommendations(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

const recommendedTracks = getRecommendations();
console.log(
  recommendedTracks.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
    return (
        <div>
            <h1>Discover new songs and artists</h1>
            <p>Based on your listening habits, try listening to these: {recommendedTracks}</p>
        </div>
    )
}