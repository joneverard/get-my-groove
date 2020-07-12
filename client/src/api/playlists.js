import axios from "axios";

export const getPlaylists = async () => {
  const { data } = await axios.get("/playlists");
  return data;
  //   return axios.get("/playlists").then(({ data }) => data);
};

export const getPlaylistTracks = async playlistId => {
  const { data } = await axios.get(`/playlist/${playlistId}`);
  return data;
};
