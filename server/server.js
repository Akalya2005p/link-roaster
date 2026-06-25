const express = require("express");
const cors = require("cors");
require("dotenv").config();

const roastRoutes = require("./routes/roastRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Link Roaster API Running 🚀",
  });
});

app.use("/api/roast", roastRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
