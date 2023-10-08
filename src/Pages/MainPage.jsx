import React from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import TrackList from "../components/Track/TrackList";
import Sidebar from "../components/Sidebar/Sidebar";
import { connect } from "react-redux";
import { Container, Footer, Main, Wrapper } from "../BaseStyledComponents";

function MainPage({ sideBarCards }) {
  return (
    <Wrapper>
      <Container>
        <Main>
          <NavMenu />
          <TrackList />
          <Sidebar
            sideBarCards={sideBarCards}
          />
        </Main>
        <AudioPlayer />
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
