const express = require("express");
const app = express();

const itemRoutes = require("./routes/items");
const indexRoute = require("./routes");
const port = 3000;

//Parsing the request of the body
app.use(express.json());
app.use("/", indexRoute);
app.use("/items", itemRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
