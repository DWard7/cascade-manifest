const {
  findAllTandem,
  createTandem,
  findAllSolo,
  createSolo,
  deleteOneTandem,
  deleteAllTandem,
  deleteAllSolo,
} = require("../controllers/cascade.controller");

const express = require("express");
const cascadeRouter = express.Router();

cascadeRouter.route("/manifest").get(findAllTandem).delete(deleteAllTandem);

cascadeRouter.route("/tandem/new").post(createTandem);

cascadeRouter.route("/solo/manifest").get(findAllSolo).delete(deleteAllSolo);

cascadeRouter.route("/solo/new").post(createSolo);

cascadeRouter.route("/tandem/:id").delete(deleteOneTandem);

// cascadeRouter.route("/solo/:id").delete(deleteOneSolo)

module.exports = cascadeRouter;
