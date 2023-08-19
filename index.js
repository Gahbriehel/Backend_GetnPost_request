const express = require("express");
const app = express();
const port = 3000;

//Parsing the request of the body
app.use(express.json());

// Basic route, path, handler request response next functions
app.get("/", (req, res) => {
  return res
    .json({
      message: "Welcome to backend API",
      status: "success",
    })
    .status(200);
});

const items = [];

app.get("/items", (req, res) => {
  return res
    .json({
      message: "Successfully fetched items",
      status: "Success",
      data: items,
    })
    .status(200);
});

app.post("/items", (req, res) => {
  items.push(req.body);
  return res
    .json({
      message: "Successfully added new items",
      status: "Success",
      data: items,
    })
    .status(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
