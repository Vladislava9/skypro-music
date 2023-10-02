import React from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import TrackList from "./components/Track/TrackList";
import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList />
          <Sidebar cards={props.state.cardImage} />
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
