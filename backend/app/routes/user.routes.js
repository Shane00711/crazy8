const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
   //route to get one user
  app.get("/api/user/findOne", [authJwt.verifyToken], controller.findOne);
  app.get("/api/user/findAll", [authJwt.verifyToken], controller.findAll);
  app.get("/api/user/search", [authJwt.verifyToken], controller.search);
  app.get("/api/user/checkplayerstatus", [authJwt.verifyToken], controller.checkplayerstatus);
};