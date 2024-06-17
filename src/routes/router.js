const { Router } = require("express");
const router = Router();
const auth = require("./auth");
const url = require("./url");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

router.use("/auth", auth);
router.use("/url", url);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = router;