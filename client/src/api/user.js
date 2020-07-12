import axios from "axios";
import { bindActionCreators } from "@reduxjs/toolkit";

export const getTopTracks = async () => {
  const { data } = await axios.get("/user/toptracks");
  return data;
};

// maybe worth creating a wrapper here which allows easy "paging" through the results.
