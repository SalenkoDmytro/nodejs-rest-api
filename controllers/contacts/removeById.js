const HTTPError = require("../../helpers/HTTPError");
const { removeContact } = require("../../models/contacts");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) throw HTTPError(404);
  res.json({ message: "contact deleted" });
};

module.exports = removeById;
