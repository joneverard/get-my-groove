import React, { useEffect, useState } from "react";
import axios from "axios";

import TrackCard from "components/track-card/track-card";

// import { getPlaylists } from "api/playlists";
import { getTopTracks } from "api/user";
window.axios = axios;

function App() {
  const [tracks, setTracks] = useState({ items: [] });

  useEffect(() => {
    getTopTracks().then(data => {
      console.log("TRACKS", data);
      setTracks(data);
    });
  }, []);

  return (
    <div className="App">
      <TrackCard track={tracks.items[0]} />
    </div>
  );
}

export default App;
