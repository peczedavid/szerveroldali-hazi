const authMW = require("../middleware/auth/authMW");
const navbarMW = require("../middleware/navbarMW");
const checkPwdMW = require("../middleware/auth/checkPwdMW");
const logoutMW = require("../middleware/auth/logoutMW");

const getAllOsszetevoMW = require("../middleware/osszetevo/getAllOsszetevoMW");
const getOsszetevoMW = require("../middleware/osszetevo/getOsszetevoMW");
const saveOsszetevoMW = require("../middleware/osszetevo/saveOsszetevoMW");

const deleteTapkiegMW = require("../middleware/taplalekkiegeszito/deleteTapkiegMW");
const getAllTapkiegMW = require("../middleware/taplalekkiegeszito/getAllTapkiegMW");
const getTapkiegMW = require("../middleware/taplalekkiegeszito/getTapkiegMW");
const saveTapkiegMW = require("../middleware/taplalekkiegeszito/saveTapkiegMW");

const renderMW = require("../middleware/renderMW");

const TapkiegModel = require("../models/taplalekkiegeszito");
const OsszetevoModel = require("../models/osszetevo");

module.exports = function (app) {
    const objRepo = {
        TapkiegModel: TapkiegModel,
        OsszetevoModel: OsszetevoModel
    };

    app.use(navbarMW);

    app.get("/login",
        renderMW(objRepo, "admin_login"));

    app.post("/login",
        checkPwdMW(objRepo));

    app.use("/logout",
        logoutMW(objRepo));


    app.get("/tapkieg/new",
        authMW(objRepo),
        getAllOsszetevoMW(objRepo),
        renderMW(objRepo, "tapkieg_felvetel"));

    app.post("/tapkieg/new",
        authMW(objRepo),
        saveTapkiegMW(objRepo));


    app.get("/tapkieg/edit/:tapkiegid",
        authMW(objRepo),
        getAllOsszetevoMW(objRepo),
        getTapkiegMW(objRepo),
        renderMW(objRepo, "tapkieg_felvetel"));

    app.post("/tapkieg/edit/:tapkiegid",
        authMW(objRepo),
        getTapkiegMW(objRepo),
        saveTapkiegMW(objRepo));

    app.get("/tapkieg/del/:tapkiegid",
        authMW(objRepo),
        getTapkiegMW(objRepo),
        deleteTapkiegMW(objRepo));

    app.get("/tapkieg/detailed/:tapkiegid",
        getTapkiegMW(objRepo),
        renderMW(objRepo, "tapkieg_reszletes"));

    app.get("/tapkieg",
        getAllTapkiegMW(objRepo),
        renderMW(objRepo, "index"));


    app.get("/osszetevo",
        getAllOsszetevoMW(objRepo),
        renderMW(objRepo, "osszetevok"));

    app.get("/osszetevo/new",
        authMW(objRepo),
        renderMW(objRepo, "osszetevo_felvetel")
    );

    app.post("/osszetevo/new",
        authMW(objRepo),
        saveOsszetevoMW(objRepo)
    );


    app.get("/osszetevo/edit/:osszetevoid",
        authMW(objRepo),
        getOsszetevoMW(objRepo),
        renderMW(objRepo, "osszetevo_felvetel"));

    app.post("/osszetevo/edit/:osszetevoid",
        authMW(objRepo),
        getOsszetevoMW(objRepo),
        saveOsszetevoMW(objRepo));

    app.get("/osszetevo/detailed/:osszetevoid",
        getOsszetevoMW(objRepo),
        renderMW(objRepo, "osszetevo_reszletes"));

    app.use("/",
        getAllTapkiegMW(objRepo),
        renderMW(objRepo, "index"));
}