const express = require("express");
const cors = require("cors");
const api = express();

api.use(cors());
api.use(express.json());

api.get('/get-gps', async (req, res) => {
  const result = await fetch("http://217.154.87.99:3000/get-gps")
  let buses = await result.json() || []

  if (Array.isArray(buses) == false) {
    buses = [
      buses
    ]
  }

  console.log(buses)
  res.json(buses)
});

api.listen(3000, () => {
  console.log("Server running on port 3000");
});
