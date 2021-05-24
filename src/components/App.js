import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;

/*

https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g

https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g

*/
