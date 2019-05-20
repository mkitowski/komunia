import React from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';

const StyledDiv = styled.div`
  background: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100vh;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  iframe {
    min-width: 90%;
    min-height: 90%;
  }
`;

class Movie extends React.Component {

_onReadyHandler = event => {
    event.target.pauseVideo();
}

  render() {
    const opts = {
      height: window.innerHeight * 0.9,
      width: window.innerWidth * 0.9,
      playerVars: {
        autoplay: 0,
        disablekb: 0,
        showinfo: 0,
      },
      // onReady={this._onReadyHandler}
    };
    return (
      <StyledDiv>
        <Youtube
          videoId="X8GKeM_aVNY"
          opts={opts}
        />
      </StyledDiv>
    );
  }
}

export default Movie;
