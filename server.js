require("./db");
const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// 4️⃣ routes
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});