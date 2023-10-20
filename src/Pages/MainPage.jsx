import NavMenu from "../components/NavMenu/NavMenu";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import TrackList from "../components/Track/TrackList";
import Sidebar from "../components/Sidebar/Sidebar";
import trackApi from "../api/trackApi";
import { connect } from "react-redux";
import { Container, Footer, Main, Wrapper } from "../BaseStyledComponents";
import { useEffect, useState } from "react";

function MainPage({ sideBarCards, handleLogOut }) {
  const [IDEntireTrack, setIDEntireTrack] = useState(null);
  const [entireDataTrack, setEntireDataTrack] = useState([]);

  useEffect(() => {
    if (IDEntireTrack) {
      trackApi.getEntireTrack(setEntireDataTrack, IDEntireTrack);
    }
}, [IDEntireTrack]);

  return (
    <Wrapper>
      <Container>
        <Main>
          <NavMenu />
          <TrackList onClickTrack={setIDEntireTrack} />
          <Sidebar sideBarCards={sideBarCards} handleLogOut={handleLogOut}/>
        </Main>
        {IDEntireTrack ? <AudioPlayer dataTrack={entireDataTrack}/> : null  }

        <Footer></Footer>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    sideBarCards: state.sideBar.cards,
  };
};

export default connect(mapStateToProps, null)(MainPage);
