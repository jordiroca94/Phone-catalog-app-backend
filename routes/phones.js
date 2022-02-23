const Phone = require("../models/Phone");
const router = require("express").Router();

// ROUTE TO GET ALL PHONES

router.get("/", async (req, res) => {
  try {
    const data = await Phone.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ROUTE TO GET ONE PHONE (PHONE DETAILS)

router.get("/:id", async (req, res) => {
  try {
    const data = await Phone.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
