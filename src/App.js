import React from 'react';
import styled from 'styled-components';
import Firebase from 'firebase';
import firebaseConfig from './firebase/config';

import Hiro from './components/Hiro/Hiro';
import Menu from './components/Menu/Menu';
import GalleryPage from './components/GalleryPage/GalleryPage';
import Movie from './components/Movie/Movie';

const StyledDiv = styled.div`

  width: 100%;
  height: 100vh;

  video {
    position: fixed;
    left: 0;
    z-index: -1;

@media screen and (max-aspect-ratio: 1920/1080) {
    min-height: 100%;
    width: auto;
}
@media screen and (min-aspect-ratio: 1920/1080) {

    min-width: 100%;
    height: auto;

} }
  .menu {
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(0,0,0,0.3);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    ul {
      display: flex;
      padding: 2rem;
      justify-content: space-between;
      li {
        list-style: none;
        padding: 1rem 2rem;
        border: 2px solid white;
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out, color .3s ease-in-out, background-color .3s ease-in-out, border .3s ease-in-out;
        :hover {
          transform: translate(4px,-4px);
          color: yellowgreen;
          border: 2px solid yellowgreen;
          background-color: rgba(0,0,0,0.6)
        }
        :active {
          transform: translate(4px,0px);
          color: yellowgreen;
          border: 2px solid yellowgreen;
          background-color: rgba(0,0,0,0.9)
        }
      }
    }
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(firebaseConfig.firebase);
  }

  state = {
    MovieVisible: false,
    HiroVisible: true
  }

  onMovieClicked = () => {
    this.setState({
      MovieVisible: true
    });
    setTimeout(()=>{
      window.scrollTo({
        behavior: "smooth",
        top: window.innerHeight,
        left: 0
      });
    },100);

  }
  render() {
    return (
      <div>
        {this.state.HiroVisible && <StyledDiv>
          <Hiro />
          <Menu handler={this.onMovieClicked}/>
        </StyledDiv>}
        {this.state.MovieVisible && <Movie />}
        {/* <GalleryPage /> */}
      </div>

    );
  }

}

export default App;