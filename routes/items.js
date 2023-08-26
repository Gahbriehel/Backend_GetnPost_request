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

router.put("/:id", (req, res) => {
  const itemId = req.params.id;
  const body = req.body;

  // check for existing
  const itemIndex = items.findIndex((item) => item.id == itemId);
  if (itemIndex < 0) {
    return res
      .json({
        message: "Item not found in the array",
        status: "error",
      })
      .status(400);
  }

  // update method 1 - using spread operator
  items[itemIndex] = {
    ...items[itemIndex], // price 1000
    ...body, // price 2000
  };

  return res
    .json({
      message: "Item updated successfully",
      status: "success",
      data: items,
    })
    .status(200);
});

router.delete("/:id", (req, res) => {
  const itemId = req.params.id;
  // check for existing
  const itemIndex = items.findIndex((item) => item.id == itemId);
  if (itemIndex < 0) {
    return res
      .json({
        message: "Item not found in the array",
        status: "error",
      })
      .status(400);
  }

  items.splice(itemIndex, 1);

  return res
    .json({
      message: "Item deleted successfully",
      status: "success",
      data: items,
    })
    .status(200);
});

module.exports = router;
