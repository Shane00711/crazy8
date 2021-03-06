const { authJwt} = require("../middleware");
const controller = require("../controllers/game.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/game/create", [authJwt.verifyToken], controller.creategame);
    app.get("/api/game/checkname", [authJwt.verifyToken], controller.checkname);
    app.get("/api/game/getallgames", [authJwt.verifyToken], controller.getallgames);
    app.get("/api/game/findgame", [authJwt.verifyToken], controller.getgamebyid);
}