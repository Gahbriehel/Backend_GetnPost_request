const express = require("express");
const router = express.Router();

const items = [];

router.get("", (req, res) => {
  return res
    .json({
      message: "Successfully fetched items",
      status: "Success",
      data: items,
    })
    .status(200);
});

router.post("", (req, res) => {
  items.push(req.body);
  return res
    .json({
      message: "Successfully added new items",
      status: "Success",
      data: items,
    })
    .status(200);
});

module.exports = router;
