const axios = require("axios");
const { ensureAuthenticated } = require("../../utils/middleware");

const _ = require("lodash");

// axios.get('https://api.github.com/user', {
//   headers: {
//     'Authorization': `token ${access_token}`
//   }
// })

module.exports = app => {
  // get list of playlists
  app.get("/user/toptracks", ensureAuthenticated, async function (req, res) {
    console.log(req.session.passport.user.accessToken);
    const data = axios.get("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `token ${req.session.passport.user.accessToken}`,
      },
    });
    res.status(200).send(data);
  });
  //   app.get("/user/toptracks", ensureAuthenticated, function (req, res) {
  //     console.log(req.session.passport.user.accessToken);
  //     spotifyApi.setAccessToken(req.session.passport.user.accessToken);
  //     spotifyApi
  //       .getUserPlaylists(req.session.passport.user.id, { limit: 50 })
  //       .then(({ body }) => {
  //         const result = {
  //           ..._.pick(body, ["total", "offset"]),
  //           playlists: _.map(body.items, item =>
  //             _.pick(item, ["id", "name", "tracks", "description", "images"])
  //           ),
  //         };
  //         res.status(200).send(result);
  //       });
  //   });
};
