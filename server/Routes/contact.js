const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/add", (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = new Contact({
    name,
    email,
    phone,
  });
  newContact
    .save()
    .then((contacts) => res.send(contacts))
    .catch((err) => console.log(err));
});
router.get("/", (req, res) => {
  Contact.find()
    .then((contact) => res.send(contact))
    .catch((err) => console.log(err));
});
router.get("/:id", (req, res) => {
  Contact.findOne({ _id: req.params.id })
    .then((contact) => res.send(contact))
    .catch((err) => console.log(err));
});
router.delete("/:id", (req, res) => {
  Contact.findOneAndDelete({ _id: req.params.id })
    .then((contact) => res.send("contact deleted"))
    .catch((err) => console.log(err));
});
router.put("/:id", (req, res) => {
  const { name, email, phone } = req.body;
  Contact.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { name, email, phone } }
  )
    .then((contact) => res.send("contact Updated"))
    .catch((err) => console.log(err));
});
module.exports = router;
