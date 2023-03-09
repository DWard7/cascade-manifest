const { Tandem } = require("../models/cascade.model");
const { Solo } = require("../models/cascade.model");

const createTandem = (req, res) => {
  Tandem.create(req.body)
    .then((tandem) => res.status(201).json(tandem))
    .catch((err) => res.status(400).json(err));
};

const createSolo = (req, res) => {
  Solo.create(req.body)
    .then((solo) => res.status(201).json(solo))
    .catch((err) => res.status(400).json(err));
};

const findAllTandem = (req, res) => {
  Tandem.find()
    .then((tandems) => res.status(200).json(tandems))
    .catch((err) => res.status(400).json(err));
};

const findAllSolo = (req, res) => {
  Solo.find()
    .then((solo) => res.status(200).json(solo))
    .catch((err) => res.status(400).json(err));
};

const deleteOneTandem = (req, res) => {
  const { id } = req.params;
  Tandem.findByIdAndDelete(id)
    .then((tandem) => res.status(200).json(tandem))
    .catch((err) => res.status(400).json(err));
};

const deleteAllTandem = (req, res) => {
  Tandem.deleteMany()
    .then((tandem) => res.status(200).json(tandem))
    .catch((err) => res.status(400).json(err));
};

const deleteAllSolo = (req, res) => {
  Solo.deleteMany()
    .then((solo) => res.status(200).json(solo))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  deleteAllTandem,
  deleteAllSolo,
  findAllTandem,
  createTandem,
  findAllSolo,
  createSolo,
  deleteOneTandem,
};
