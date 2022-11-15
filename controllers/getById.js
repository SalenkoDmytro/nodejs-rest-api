const HttpError = require("../helpers/HTTPError");
const { getContactById } = require("../models/contacts.js");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) throw HttpError(404);
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = { getById };
