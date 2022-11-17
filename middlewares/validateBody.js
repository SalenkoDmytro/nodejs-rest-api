const { HTTPError } = require("../helpers");
const { addSchema } = require("../schemas/contacts");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = addSchema.validate(req.body);
    if (error) next(HTTPError(400, error.message));
    next();
  };
  return func;
};

module.exports = validateBody;
