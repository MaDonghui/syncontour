import { PlayerConfigContext } from "../App";
import { useState } from "react";

function Album(props) {
  return (
      // consume AudioUrlsContext, using its updater to notify player what song to play. 
    <PlayerConfigContext.Consumer>
      {({ url, updater }) => {
        return (
          <div className="album">
            <h2 className="title">{props.meta.title}</h2>
            <ul className="track-list">
              {/* generate a li for each track and bind onClick event */}
              {props.meta.tracks.map((track, index) => {
                return (
                  <li key={track.id} onClick={updater.bind(this, props.meta.path, track.id)}>
                    {track.title}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }}
    </PlayerConfigContext.Consumer>
  );
}

export default Album;
