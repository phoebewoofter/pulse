import Logo from '../Logo/Logo';
import React, { useEffect, useState } from 'react';
import SearchBar from '../Search/SearchBar';
import SearchResults from '../Search/SearchResults';
import Login from '../Login/Login';


function App() {

  return (
    <>
     <Logo />
     <Login />
     <SearchResults />
    </>
  );
}
export default App;