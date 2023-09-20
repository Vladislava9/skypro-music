import React from 'react'
import './App.css'
import NavMenu from './components/NavMenu'
import TrackList from './components/TrackList'
import AudioPlayer from './components/AudioPlayer'
import Sidebar from './components/Sidebar'


function App(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList/>
          <Sidebar cards={props.state.cardImage}/>
        </main>
        <AudioPlayer/>
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
