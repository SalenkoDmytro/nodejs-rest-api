const HttpError = require("../helpers/HTTPError");
const { removeContact } = require("../models/contacts");

const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contacts = await removeContact(contactId);
    if (!contacts) throw HttpError(404);
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { removeById };
