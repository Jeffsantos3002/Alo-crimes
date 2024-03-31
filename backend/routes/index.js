const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/vitimas", controller.getVitimas);
router.get("/ocorrencias", controller.getOcorrencias);

module.exports = router;
