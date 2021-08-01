import Album from "./album";

function Playlist(props) {
  return (
    <div className="playlist">
      <ul>
        {props.albums.map((album) => {
          return <Album key={album.id} meta={album} />;
        })}
      </ul>
    </div>
  );
}

export default Playlist;
