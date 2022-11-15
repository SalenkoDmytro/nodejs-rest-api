const express = require("express");
const { add } = require("../../controllers/add");
const { getAll } = require("../../controllers/getAll");
const { getById } = require("../../controllers/getById");
const { removeById } = require("../../controllers/removeById");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", add);

router.delete("/:contactId", removeById);

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
