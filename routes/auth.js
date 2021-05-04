const jwt = require("jsonwebtoken");

function verifyUser(req, res, next) {
    const accessToken = req.cookies["access-token"];
    if (accessToken) {
      jwt.verify(accessToken, process.env.REACT_APP_ACCESS_TOKEN_SECRET, (err) => {
          if (err) {
              res.status(400).json({auth: false, message: "Failed to authenticate"});
          } else {
              req.authenticated = true;
              return next();
          }
      })
    }
    if (!accessToken) {
      res.status(400).send({auth: false, message: "Missing authentication token"})
    }
  };

  module.exports = verifyUser;