import React from "react";
import axios from "axios";

import TrackCard from "components/track-card/track-card";

import { getPlaylists } from "api/playlists";

function App() {
  window.axios = axios;
  return (
    <div className="App">
      <TrackCard />
    </div>
  );
}

export default App;
