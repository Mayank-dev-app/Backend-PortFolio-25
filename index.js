const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");


const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://octport.netlify.app/"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
