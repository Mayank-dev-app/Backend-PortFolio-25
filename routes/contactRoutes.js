const express = require("express");
const { sendMessage } = require("../controllers/contactController");

const router = express.Router();

router.get("/send-message", (req, res) => {
   return res.json({
    message: 'API is proper working.'
   })
});

router.post("/send-message", sendMessage);

module.exports = router;