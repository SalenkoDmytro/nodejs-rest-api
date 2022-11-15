const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contactById = contacts.find((el) => el.id === contactId);
  return contactById || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const newContacts = contacts.filter((el) => el.id !== contactId);
  if (contacts.length === newContacts.length) return null;
  await fs.writeFile(contactsPath, JSON.stringify(newContacts), (err) => {
    if (err) console.error(err);
  });
  return newContacts;
};

const addContact = async (body) => {
  const { name, email, phone } = body;
  const contacts = await listContacts();
  const newContact = {
    id: (Number(contacts[contacts.length - 1].id) + 1).toString(),
    name,
    email,
    phone,
  };
  const newContactList = { ...contacts, newContact };
  await fs.writeFile(contactsPath, JSON.stringify(newContactList), (err) => {
    if (err) console.error(err);
  });
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
