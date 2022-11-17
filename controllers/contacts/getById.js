const HTTPError = require("../../helpers/HTTPError");
const { getContactById } = require("../../models/contacts.js");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) throw HTTPError(404);
  res.json(contact);
};

module.exports = getById;
