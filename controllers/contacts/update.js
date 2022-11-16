const HTTPError = require("../../helpers/HTTPError");
const { updateContact } = require("../../models/contacts");

const update = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  if (!result) throw HTTPError(404);
  res.json(result);
};

module.exports = update;
