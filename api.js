const express = require("express");
const cors = require("cors");
const api = express();

api.use(cors());
api.use(express.json());

api.get('/get-gps', async (req, res) => {
  res.json((await fetch("http://217.154.87.99:3000/get-gps")).json());
});

api.listen(3000, () => {
  console.log("Server running on port 3000");
});
