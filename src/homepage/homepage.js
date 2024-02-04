
import Header from "../general/header"
import Main from "./main"
import Section from './section';
import Footer from '../general/footer';
import Github from "./github"
import {useEffect, useState} from "react"
import SpotifyListener from "spotify-activity-listener";


function Homepage() {

  const [music, setMusic] = useState({
    name: "Nothing Playing",
    artist: "",
    album: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"

  })

 
  useEffect(() => {
    document.title = 'Home Page';
    
/*    let Listener = new SpotifyListener({
      username: 'felowzed',
      key: process.env.REACT_APP_TOKEN,
      pollInterval: 60000, 
      trackCount: 1, 
      callback: (res) => {
        if(music.name === res[0].name) return;
        
        setMusic({
          name: res[0].name,
          artist: res[0].artist,
          album: res[0].album,
          image: res[0].art === music.image ? music.image : res[0].art
          })
      }
    });

  
    Listener.startListening() */
  }, []);
  return (
<>

   <Header />
   <Main />
 /*  <a className="abs" href="/">

    <img src={music.image} className="image_spotify" alt="no source"/>
    <div className="music_info">
      <h2 className="music_name">{music.name}</h2>
      <h3 className="music_artist">{music.artist}</h3>
      <h3 className="music_album">{music.album}</h3>
      </div>
   </a>*/
   <Section />
   <Github />
   <Footer />
   </>
  );
}

export default Homepage;
