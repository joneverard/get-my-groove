const axios = require("axios");
const { ensureAuthenticated } = require("../../utils/middleware");

module.exports = app => {
  // get list of playlists
  app.get("/user/toptracks", ensureAuthenticated, async function (req, res) {
    console.log(req.session.passport.user.accessToken);
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term",
      {
        headers: {
          Authorization: `Bearer ${req.session.passport.user.accessToken}`,
        },
      }
    );
    res.status(200).send(data);
  });
};
