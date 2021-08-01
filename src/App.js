import React, { useState, useEffect, createContext } from "react";
import "./App.css";

// components
import Player from "./player/Player";
import Playlist from "./playlist/Playlist";

// Firebase features
import { storageRef, databaseRef } from "./Firebase";

// context api allow Album notify App to update audio url for Player
export const PlayerConfigContext = createContext({
  urls: [""],
  index: -1,
  updateAudioUrls: () => {},
});

function App() {
  // audio context updater
  async function updatePlayerConfig(albumPath, index) {
    // url buffers
    let promises = [];

    // fetch all tracks' downloadurls under ablumPath in promise object
    let allTrackRefs = await storageRef.child(albumPath).listAll();
    allTrackRefs.items.forEach((trackRef) => {
      let buffer = trackRef.getDownloadURL();
      promises.push(buffer);
    });

    Promise.all(promises).then((result) => {
      setPlayerConfig({
        urls: result,
        index: index,
        updater: updatePlayerConfig,
      });
    });
  }

  // initialise state
  const [albums, setAlbums] = useState([]); // the playlist array[json] from firebase realtime database
  const [playerConfig, setPlayerConfig] = useState({
    urls: [""],
    index: -1,
    updater: updatePlayerConfig,
  }); // the firebase storage path to current playing Audio

  // initialisation
  useEffect(() => {
    // register realtime db listener, update playlist state on change
    databaseRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setAlbums(data.albums);
    });
  }, []);

  return (
    <div className="App">
      <h1>Syncontour</h1>
      <PlayerConfigContext.Provider value={playerConfig}>
        <Playlist albums={albums} />
        <Player />
      </PlayerConfigContext.Provider>
    </div>
  );
}

export default App;
