import Logo from '../Logo/Logo';
import React, { useEffect, useState } from 'react';
import SearchBar from '../Search/SearchBar';
import SearchResults from '../Search/SearchResults';
import Login from '../../api/Spotify';


function App() {

  return (
    <>
     <Logo />
     <Login />
     <SearchBar />
     <SearchResults />
    </>
  );
}
export default App;