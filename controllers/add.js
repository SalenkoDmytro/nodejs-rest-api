const HttpError = require("../helpers/HTTPError");
const { addContact } = require("../models/contacts");

const add = async (req, res, next) => {
  try {
    const contacts = await addContact(req.body);
    res.status(201).json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = { add };
