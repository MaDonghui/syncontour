import { useContext, useEffect } from "react";
import { Howl, Howler } from "howler";
import { PlayerConfigContext } from "../App";

function Player(props) {
  // context consumer
  const playerConfig = useContext(PlayerConfigContext);
  let audioPlayer = null;

  // auto play an album from index to the end
  function autoPlay(urls, index) {
    // debug purpose
    console.log(`Track Urls: ${urls.toString()}`);
    console.log("Start with: " + index);

    // prevent html5 pool drain error
    if (index === -1) {
      return;
    }

    // stop and destory previous howler instance
    Howler.unload();

    // new howler instance
    audioPlayer = new Howl({
      src: urls[index],
      format: "mp3",
      autoplay: true,
      html5: true,
      onend: function () {
        if (index + 1 === urls.length) {
          return;
        } else {
          autoPlay(urls, index + 1);
        }
      },
    });

    // start playing if no mistake
    if (audioPlayer != null) {
      audioPlayer.play(index);
    }
  }

  function handlePlayButtonCLick() {
    
  }

  // when playerConfig changes (new album, song to play)
  useEffect(() => {
    autoPlay(playerConfig.urls, playerConfig.index);
  });

  return (
    <div className="player">
      <button id="play-button">play</button>
      <button id="previous-button">previous</button>
      <button id="next-button">next</button>
      <button id="shuffle-button">shuffle</button>
      <button id="repeat-button">repeat</button>
    </div>
  );
}

export default Player;
